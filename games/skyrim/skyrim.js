/* games/skyrim/skyrim.js */

const Skyrim_Module = (function () {

    let container, stage, hudTitle, tooltip, pointDisplay, summaryPanel, summaryContent;
    let isInitialized = false;

    // Datos
    let skillsData = {};
    let treeKeys = [];
    let currentIndex = 0;

    // Configuración
    const TOTAL_POINTS = 80;
    let currentPoints = TOTAL_POINTS;
    const RADIUS = 1200;

    function init() {
        if (isInitialized) return;

        // 1. Contenedor
        container = document.getElementById('skyrim-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'skyrim-container';
            document.body.appendChild(container);
        }

        // 2. HTML
        container.innerHTML = `
            <div id="sky-hud-top">
                <h1 id="sky-tree-title">Loading...</h1>
                <div id="sky-tree-desc">Skill Constellation</div>
            </div>

            <div id="sky-carousel-stage"></div>

            <div id="sky-tooltip">
                <h3 id="sky-tt-title"></h3>
                <p id="sky-tt-desc"></p>
                <div id="sky-tt-meta">
                    <span id="sky-tt-rank"></span>
                    <span id="sky-tt-hint">Right-click to refund</span>
                </div>
            </div>

            <div id="sky-summary-panel">
                <button class="panel-close" onclick="Skyrim_Module.toggleSummary()">×</button>
                <div class="sky-sum-header"><h2>Perks Acquired</h2></div>
                <div class="sky-sum-content" id="sky-sum-content"></div>
            </div>

            <div id="sky-hud-bottom">
                <div class="sky-stat">
                    <span class="sky-val" id="sky-points">${TOTAL_POINTS}</span>
                    <span class="sky-label">Perks Available</span>
                </div>
            </div>

            <div id="sky-controls">
                <button id="sky-btn-menu" onclick="Skyrim_Module.toggleSummary()">View Summary</button>
                <button id="sky-btn-exit" onclick="Skyrim_Module.destroy()">Exit to Menu</button>
            </div>
        `;

        stage = document.getElementById('sky-carousel-stage');
        hudTitle = document.getElementById('sky-tree-title');
        tooltip = document.getElementById('sky-tooltip');
        pointDisplay = document.getElementById('sky-points');
        summaryPanel = document.getElementById('sky-summary-panel');
        summaryContent = document.getElementById('sky-sum-content');

        loadData();
        computeLogic();
        renderCarousel();
        setupEvents();
        updateCarousel();
        updateSummary();

        container.style.display = 'block';
        isInitialized = true;

        // --- EFECTO DE ENCENDIDO (NUEVO) ---
        playIntroAnimation();
    }

    // --- ANIMACIÓN DE ENTRADA ---
    function playIntroAnimation() {
        // 1. Buscar todos los nodos raíz (sin padres) de todos los árboles
        treeKeys.forEach(treeName => {
            const tree = skillsData[treeName];
            Object.values(tree).forEach(node => {
                // Si es un nodo raíz y no está comprado
                if (node.parents.length === 0 && node.state !== 'selected') {
                    const el = document.getElementById(`node-${treeName}-${node.id}`);
                    if (el) {
                        // Forzamos visualmente el estado "Selected" (Azul brillante)
                        // Esto usa la transición CSS del .sky-node, así que se verá suave
                        el.className = `sky-node state-selected`;

                        // Opcional: Hacerlos un poco más grandes temporalmente
                        el.style.transform = "translate(-50%, -50%) scale(1.3)";
                    }
                }
            });
        });

        // 2. Apagar después de un tiempo
        setTimeout(() => {
            treeKeys.forEach(treeName => {
                // Restauramos la visualización correcta basada en los datos reales
                updateVisuals(treeName);

                // Restaurar escala (quitando el inline style para que el CSS mande)
                const tree = skillsData[treeName];
                Object.values(tree).forEach(node => {
                    const el = document.getElementById(`node-${treeName}-${node.id}`);
                    if (el) el.style.transform = "";
                });
            });
        }, 1200); // 1.2 segundos de brillo
    }

    function loadData() {
        if (typeof SKYRIM_DATA === 'undefined') {
            console.error("Faltan datos de Skyrim"); return;
        }
        skillsData = JSON.parse(JSON.stringify(SKYRIM_DATA));
        treeKeys = Object.keys(skillsData);
        currentPoints = TOTAL_POINTS;

        if (typeof SKYRIM_LAYOUTS !== 'undefined') {
            treeKeys.forEach(tree => {
                const layout = SKYRIM_LAYOUTS[tree];
                Object.values(skillsData[tree]).forEach(node => {
                    if (layout && layout[node.id]) {
                        node.x = layout[node.id].x;
                        node.y = layout[node.id].y;
                    } else {
                        node.x = 500; node.y = 500;
                    }
                });
            });
        }
    }

    function computeLogic() {
        treeKeys.forEach(treeName => {
            const tree = skillsData[treeName];
            Object.values(tree).forEach(node => {
                if (node.currentRank > 0) {
                    node.state = 'selected';
                } else {
                    if (node.parents.length === 0) {
                        node.state = 'available';
                    } else {
                        const validParents = node.parents.map(pid => tree[pid]).filter(p => p !== undefined);
                        if (validParents.length === 0 && node.parents.length > 0) {
                            node.state = 'locked';
                        } else {
                            const isUnlockable = validParents.some(p => p.currentRank > 0);
                            node.state = isUnlockable ? 'available' : 'locked';
                        }
                    }
                }
            });
        });
    }

    function renderCarousel() {
        stage.innerHTML = '';
        const anglePerItem = 360 / treeKeys.length;

        treeKeys.forEach((key, index) => {
            const angle = index * anglePerItem;
            const el = document.createElement('div');
            el.className = 'sky-constellation';
            el.style.transform = `rotateY(${angle}deg) translateZ(${RADIUS}px)`;

            renderNodes(el, skillsData[key], key);
            stage.appendChild(el);
        });
    }

    function renderNodes(containerEl, treeNodes, treeName) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("class", "sky-svg-layer");
        svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%");
        containerEl.appendChild(svg);

        // Líneas
        Object.values(treeNodes).forEach(node => {
            node.parents.forEach(pid => {
                const parent = treeNodes[pid];
                if (parent) {
                    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", parent.x); line.setAttribute("y1", parent.y);
                    line.setAttribute("x2", node.x); line.setAttribute("y2", node.y);
                    line.setAttribute("stroke", "rgba(255,255,255,0.15)");
                    line.setAttribute("stroke-width", "2");
                    line.id = `line-${treeName}-${parent.id}-${node.id}`;
                    svg.appendChild(line);
                }
            });
        });

        // Nodos
        Object.values(treeNodes).forEach(node => {
            const div = document.createElement('div');
            div.className = `sky-node`;
            div.style.left = node.x + 'px';
            div.style.top = node.y + 'px';
            div.id = `node-${treeName}-${node.id}`;

            div.onclick = (e) => handleClick(e, node, treeName);
            div.oncontextmenu = (e) => handleRightClick(e, node, treeName);
            div.onmouseenter = () => showTooltip(node);
            div.onmousemove = (e) => moveTooltip(e);
            div.onmouseleave = () => hideTooltip();

            containerEl.appendChild(div);
        });

        updateVisuals(treeName);
    }

    function updateVisuals(treeName) {
        const tree = skillsData[treeName];

        Object.values(tree).forEach(node => {
            const el = document.getElementById(`node-${treeName}-${node.id}`);
            if (el) el.className = `sky-node state-${node.state}`;
        });

        Object.values(tree).forEach(child => {
            child.parents.forEach(pid => {
                const parent = tree[pid];
                if (parent) {
                    const line = document.getElementById(`line-${treeName}-${parent.id}-${child.id}`);
                    if (line) {
                        if (parent.currentRank > 0) {
                            line.setAttribute("stroke", "rgba(170, 221, 255, 0.8)");
                            line.setAttribute("stroke-width", "3");
                        } else {
                            line.setAttribute("stroke", "rgba(255,255,255,0.15)");
                            line.setAttribute("stroke-width", "2");
                        }
                    }
                }
            });
        });
    }

    function setupEvents() {
        window.addEventListener('wheel', handleScroll);
    }

    function handleScroll(e) {
        if (e.deltaY > 0) currentIndex++; else currentIndex--;
        if (currentIndex >= treeKeys.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = treeKeys.length - 1;
        updateCarousel();
    }

    function updateCarousel() {
        const anglePerItem = 360 / treeKeys.length;
        const currentAngle = currentIndex * -anglePerItem;
        stage.style.transform = `translateZ(-${RADIUS}px) rotateY(${currentAngle}deg)`;

        const currentKey = treeKeys[currentIndex];
        hudTitle.innerText = currentKey;

        document.querySelectorAll('.sky-constellation').forEach((el, idx) => {
            if (idx === currentIndex) el.classList.add('active');
            else el.classList.remove('active');
        });
    }

    function handleClick(e, node, treeName) {
        if (node.state === 'locked') return;

        if (currentPoints > 0) {
            if (node.currentRank < node.maxRank) {
                node.currentRank++;
                currentPoints--;

                computeLogic();
                updateVisuals(treeName);
                updateStats();
                updateSummary();
                showTooltip(node);
            }
        } else {
            alert("No more perks points.");
        }
    }

    function handleRightClick(e, node, treeName) {
        e.preventDefault();

        if (node.currentRank > 0) {
            const tree = skillsData[treeName];
            const hasActiveChildren = Object.values(tree).some(child =>
                child.parents.includes(node.id) && child.currentRank > 0
            );

            if (hasActiveChildren && node.currentRank === 1) {
                alert("Cannot refund: Dependent perks are active.");
                return;
            }

            node.currentRank--;
            currentPoints++;

            computeLogic();
            updateVisuals(treeName);
            updateStats();
            updateSummary();
            showTooltip(node);
        }
    }

    function updateStats() {
        pointDisplay.innerText = currentPoints;
    }

    function updateSummary() {
        summaryContent.innerHTML = '';
        let hasItems = false;

        treeKeys.forEach(treeName => {
            const tree = skillsData[treeName];
            const activeNodes = Object.values(tree).filter(n => n.currentRank > 0);

            if (activeNodes.length > 0) {
                hasItems = true;
                const groupHeader = document.createElement('div');
                groupHeader.style.color = '#fff';
                groupHeader.style.marginTop = '15px';
                groupHeader.style.borderBottom = '1px solid #333';
                groupHeader.innerHTML = `<strong>${treeName}</strong>`;
                summaryContent.appendChild(groupHeader);

                activeNodes.forEach(node => {
                    const item = document.createElement('div');
                    item.className = 'sky-sum-item';
                    item.innerHTML = `
                        <div class="sky-sum-name">
                            ${node.title} 
                            <span class="sky-sum-rank">Rank ${node.currentRank}/${node.maxRank}</span>
                        </div>
                        <div class="sky-sum-desc">${node.description.substring(0, 60)}...</div>
                    `;
                    summaryContent.appendChild(item);
                });
            }
        });

        if (!hasItems) {
            summaryContent.innerHTML = '<div style="color:#666; text-align:center; padding-top:20px;">No perks acquired.</div>';
        }
    }

    function toggleSummary() { summaryPanel.classList.toggle('open'); }

    function showTooltip(node) {
        tooltip.style.display = 'block';
        document.getElementById('sky-tt-title').innerText = node.title;
        document.getElementById('sky-tt-desc').innerText = node.description || "No description available.";
        document.getElementById('sky-tt-rank').innerText = `Rank ${node.currentRank}/${node.maxRank}`;

        const titleEl = document.getElementById('sky-tt-title');
        if (node.state === 'locked') titleEl.style.color = '#888';
        else if (node.state === 'selected') titleEl.style.color = 'var(--sky-blue)';
        else titleEl.style.color = '#fff';
    }

    function moveTooltip(e) {
        const offset = 15;
        let left = e.clientX + offset;
        let top = e.clientY + offset;
        if (left + 320 > window.innerWidth) left = e.clientX - 320;
        if (top + 200 > window.innerHeight) top = e.clientY - 150;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    }

    function hideTooltip() { tooltip.style.display = 'none'; }

    function destroy() {
        window.removeEventListener('wheel', handleScroll);
        if (container) { container.remove(); container = null; }
        const css = document.getElementById('skyrim-css');
        if (css) css.remove();
        isInitialized = false;
        if (window.restoreMainMenu) window.restoreMainMenu();
    }

    return { init, destroy, toggleSummary };
})();