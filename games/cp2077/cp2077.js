/* games/cp2077/cp2077.js */

const CP2077_Module = (function () {

    // --- VARIABLES DE ESTADO ---
    let GLOBAL_STATE = {};
    let availablePoints = 80;
    let currentTreeName = "Body";

    let isInitialized = false;
    let isDataLoaded = false; // <--- NUEVA VARIABLE: Para controlar la persistencia

    // --- CONSTANTES ---
    const ASSET_PREFIX = "games/cp2077/";
    let container = null;
    let nodesLayer, svgLayer, tooltip, pointsLabel, summaryPanel, presetTooltip;

    // =========================================
    //  INIT & DESTROY (Ciclo de Vida)
    // =========================================

    function init() {
        if (isInitialized) return;

        // 1. Inyectar HTML Estructural
        injectHTML();

        // 2. Referencias al DOM
        container = document.getElementById('cp2077-container');
        nodesLayer = document.getElementById('nodes-layer');
        svgLayer = document.getElementById('connections-svg');
        tooltip = document.getElementById('cp2077-tooltip');
        pointsLabel = document.getElementById('points-count');
        presetTooltip = document.getElementById('cp2077-preset-tooltip');

        // 3. CARGA DE DATOS INTELIGENTE (PERSISTENCIA)
        // Solo cargamos los datos desde cero si NUNCA hemos entrado antes.
        // Si ya entramos (isDataLoaded es true), usamos el GLOBAL_STATE que quedó en memoria.
        if (!isDataLoaded) {
            if (typeof CYBERPUNK_DATA !== 'undefined') {
                GLOBAL_STATE = JSON.parse(JSON.stringify(CYBERPUNK_DATA));
                availablePoints = 80; // Aseguramos puntos iniciales
                isDataLoaded = true;  // Marcamos que ya tenemos datos vivos
            } else {
                console.error("CP2077: Faltan datos (skills_data.js).");
                return;
            }
        }

        // 4. Configurar Eventos UI
        setupEventListeners();

        // 5. Render Inicial
        // Al renderizar, leerá GLOBAL_STATE. Si venimos de afuera, 
        // pintará los perks amarillos que ya tenías comprados.
        updatePointsUI();
        renderTree(currentTreeName); // Carga la pestaña actual (o la última visitada)

        window.addEventListener('resize', handleResize);

        isInitialized = true;
        console.log("CP2077 Module Loaded (State Persisted).");
    }

    function destroy() {
        if (!container) return;
        window.removeEventListener('resize', handleResize);
        container.remove(); // Elimina todo el HTML del juego del DOM
        isInitialized = false;
        container = null;
        console.log("CP2077 Module Destroyed.");
    }

    // =========================================
    //  GENERADOR DE HTML (UI)
    // =========================================
    function injectHTML() {
        const html = `
        <div id="cp2077-container">
            <button id="cp2077-exit-btn" onclick="goBackToLauncher()">← Exit</button>

            <div class="points-display">
                <span class="label">AVAILABLE POINTS</span>
                <span id="points-count">80</span>
            </div>

            <div id="reset-container" title="Resetear toda la Build">
                <button id="btn-reset">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
                        <path d="M3 3v9h9" />
                    </svg>
                </button>
            </div>

            <div id="summary-trigger" title="Ver Resumen de Build">
                <button id="btn-summary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6"></line>
                        <line x1="8" y1="12" x2="21" y2="12"></line>
                        <line x1="8" y1="18" x2="21" y2="18"></line>
                        <line x1="3" y1="6" x2="3.01" y2="6"></line>
                        <line x1="3" y1="12" x2="3.01" y2="12"></line>
                        <line x1="3" y1="18" x2="3.01" y2="18"></line>
                    </svg>
                </button>
            </div>

            <aside id="summary-panel">
                <div class="summary-header">
                    <h2>BUILD SUMMARY</h2>
                    <button class="close-btn">×</button>
                </div>
                <div class="summary-tabs">
                    <button class="s-tab active" data-tab="list">PERK LIST</button>
                    <button class="s-tab" data-tab="stats">FULL STATS</button>
                </div>
                <div id="summary-content-list" class="summary-content active">
                    <div class="empty-msg">No perks selected.</div>
                </div>
                <div id="summary-content-stats" class="summary-content">
                     <div class="empty-msg">No active effects.</div>
                </div>
            </aside>

            <aside class="sidebar-nav">
                ${generateSidebarBtn("Body", "Body")}
                ${generateSidebarBtn("Reflexes", "Reflexes")}
                ${generateSidebarBtn("Technical Ability", "Tech")}
                ${generateSidebarBtn("Intelligence", "Intelligence")}
                ${generateSidebarBtn("Cool", "Cool")}
            </aside>

            <main id="main-tree-area">
                <div class="tree-wrapper">
                    <svg id="connections-svg"></svg>
                    <div id="nodes-layer"></div>
                </div>
            </main>

            <div id="cp2077-tooltip"></div>
            <div id="cp2077-preset-tooltip"></div>

            <div id="presets-container">
                <button id="btn-presets">📁 PRESETS</button>
                <div id="presets-menu">
                    <div id="presets-list"></div>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', html);
    }

    function generateSidebarBtn(treeName, label) {
        // Nota: Agregamos ASSET_PREFIX a la imagen
        return `
        <button class="tab-btn ${treeName === 'Body' ? 'active' : ''}" data-tree="${treeName}">
            <img src="${ASSET_PREFIX}assets/mainPerks/${treeName}.webp" alt="${label}">
            <span class="nav-label">${label.toUpperCase()}</span>
        </button>`;
    }

    // =========================================
    //  LÓGICA CORE (Adaptada)
    // =========================================

    function setupEventListeners() {
        // Tabs Navegación
        container.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const clickedBtn = e.currentTarget;
                container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                clickedBtn.classList.add('active');
                currentTreeName = clickedBtn.getAttribute('data-tree');
                renderTree(currentTreeName);
            });
        });

        // Botones UI Principales
        container.querySelector('#btn-presets').addEventListener('click', togglePresetsMenu);
        container.querySelector('#btn-reset').addEventListener('click', resetAllTrees);

        // --- SUMMARY LISTENERS ---
        summaryPanel = container.querySelector('#summary-panel');

        // Abrir Panel
        container.querySelector('#btn-summary').addEventListener('click', () => {
            summaryPanel.classList.toggle('open');
        });

        // Cerrar Panel (X)
        container.querySelector('.close-btn').addEventListener('click', () => {
            summaryPanel.classList.remove('open');
        });

        // Cambiar Pestañas (List / Stats)
        container.querySelectorAll('.s-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                // UI Botones
                container.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');

                // UI Contenido
                const targetId = e.target.getAttribute('data-tab'); // 'list' o 'stats'
                container.querySelectorAll('.summary-content').forEach(c => c.classList.remove('active'));
                container.querySelector(`#summary-content-${targetId}`).classList.add('active');
            });
        });
    }

    function renderTree(treeName) {
        const treeData = GLOBAL_STATE[treeName];
        if (!treeData) return;

        nodesLayer.innerHTML = '';
        svgLayer.innerHTML = '';

        // No dibujamos guías visuales como pediste en la versión final

        Object.values(treeData).forEach(node => {
            // Calcular tipo si no existe
            if (!node.nodeType) {
                if (node.levelReq >= 20) node.nodeType = 'type-ultimate';
                else if (node.children.length >= 2) node.nodeType = 'type-major';
                else node.nodeType = 'type-minor';
            }

            const el = createNodeElement(node, treeData);
            nodesLayer.appendChild(el);

            // Layout Config
            if (typeof CUSTOM_LAYOUTS !== 'undefined' && CUSTOM_LAYOUTS[treeName] && CUSTOM_LAYOUTS[treeName][node.id]) {
                const pos = CUSTOM_LAYOUTS[treeName][node.id];
                el.style.left = pos.left;
                el.style.top = pos.top;
            } else {
                el.style.left = '50px'; el.style.top = '50px';
            }
        });

        setTimeout(() => drawConnections(treeData), 50);
    }

    function createNodeElement(node, treeData) {
        const div = document.createElement('div');
        div.className = `perk-node ${node.nodeType} ${node.state}`;
        div.id = `node-${node.id}`;

        // Tile Image (Usamos ASSET_PREFIX)
        const tileUrl = getTileImage(node.nodeType, node.state);
        div.style.backgroundImage = `url('${tileUrl}')`;

        // Icon
        if (node.icon) {
            const img = document.createElement('img');
            // FIX CRÍTICO: skills_data.js trae "assets/...", necesitamos "games/cp2077/assets/..."
            img.src = ASSET_PREFIX + node.icon;
            img.className = 'perk-icon';
            img.draggable = false;
            div.appendChild(img);
        }

        // Counter
        if (node.maxLevel > 1) {
            const counter = document.createElement('div');
            counter.className = 'level-counter';
            counter.id = `cnt-${node.id}`;
            counter.textContent = `${node.currentLevel}/${node.maxLevel}`;
            div.appendChild(counter);
        }

        node.domElement = div;

        // Events
        div.addEventListener('click', () => handleLeftClick(node.id, treeData));
        div.addEventListener('contextmenu', (e) => { e.preventDefault(); handleRightClick(node.id, treeData); });
        div.addEventListener('mouseenter', (e) => showTooltip(e, node));
        div.addEventListener('mouseleave', () => tooltip.style.display = 'none');

        return div;
    }

    function getTileImage(type, state) {
        let typeName = (type === 'type-major') ? 'major' : (type === 'type-ultimate' ? 'ultimate' : 'minor');
        let stateName = (state === 'state-available') ? 'available' : (state === 'state-selected' ? 'selected' : 'blocked');
        return `${ASSET_PREFIX}assets/tiles/${typeName}_${stateName}.png`;
    }

    function updatePointsUI() {
        pointsLabel.textContent = availablePoints;
        pointsLabel.style.color = (availablePoints === 0) ? '#ea2e2e' : '#fcee0a';
    }

    function updateNodeVisuals(node) {
        if (!node.domElement) return;
        node.domElement.classList.remove('state-blocked', 'state-available', 'state-selected');
        node.domElement.classList.add(node.state);

        const newTileUrl = getTileImage(node.nodeType, node.state);
        node.domElement.style.backgroundImage = `url('${newTileUrl}')`;

        if (node.maxLevel > 1) {
            const cnt = container.querySelector(`#cnt-${node.id}`);
            if (cnt) cnt.textContent = `${node.currentLevel}/${node.maxLevel}`;
        }
    }

    // =========================================
    //  LOGIC: CLICKS
    // =========================================
    function handleLeftClick(id, treeData) {
        const node = treeData[id];
        const canBuy = (node.state === 'state-available' || (node.state === 'state-selected' && node.currentLevel < node.maxLevel));

        if (canBuy && availablePoints > 0) {
            node.currentLevel++;
            availablePoints--;
            if (node.currentLevel > 0) node.state = 'state-selected';

            updatePointsUI();
            updateNodeVisuals(node);
            if (node.currentLevel === node.maxLevel) node.children.forEach(childId => checkUnlock(childId, treeData));

            drawConnections(treeData);
            updateSummary(); // (Si el summary panel está visible)
            refreshTooltip(node);
        }
    }

    function handleRightClick(id, treeData) {
        const node = treeData[id];
        if (node.currentLevel > 0) {
            let dependencyIssue = false;
            if (node.currentLevel === node.maxLevel) {
                dependencyIssue = node.children.some(childId => {
                    const child = treeData[childId];
                    return child && child.currentLevel > 0;
                });
            }
            if (dependencyIssue) { alert("⚠️ No puedes retirar este perk porque tiene hijos activos."); return; }

            node.currentLevel--;
            availablePoints++;
            if (node.currentLevel === 0) node.state = 'state-available';
            if (node.currentLevel < node.maxLevel) node.children.forEach(childId => checkLock(childId, treeData));

            updatePointsUI();
            updateNodeVisuals(node);
            drawConnections(treeData);
            refreshTooltip(node);
        }
    }

    function checkUnlock(id, treeData) {
        const node = treeData[id];
        if (!node || node.state !== 'state-blocked') return;
        if (node.parents.length === 0) return;
        const allParentsMaxed = node.parents.every(pid => {
            const pNode = treeData[pid];
            return pNode && pNode.state === 'state-selected' && pNode.currentLevel >= pNode.maxLevel;
        });
        if (allParentsMaxed) {
            node.state = 'state-available';
            updateNodeVisuals(node);
        }
    }

    function checkLock(id, treeData) {
        const node = treeData[id];
        if (!node) return;
        if (node.state === 'state-available') {
            node.state = 'state-blocked';
            updateNodeVisuals(node);
        }
    }

    // =========================================
    //  SVG / CONNECTIONS
    // =========================================
    function drawConnections(treeData) {
        if (!treeData) return;
        svgLayer.innerHTML = '';
        const containerRect = nodesLayer.getBoundingClientRect();

        Object.values(treeData).forEach(parent => {
            if (!parent.domElement) return;
            parent.children.forEach(childId => {
                const child = treeData[childId];
                if (!child || !child.domElement) return;

                const pRect = parent.domElement.getBoundingClientRect();
                const cRect = child.domElement.getBoundingClientRect();

                const startX = (pRect.left - containerRect.left) + (pRect.width / 2);
                const startY = (pRect.top - containerRect.top);
                const endX = (cRect.left - containerRect.left) + (cRect.width / 2);
                const endY = (cRect.bottom - containerRect.top);

                const pathData = getCircuitPath(startX, startY, endX, endY);
                let statusClass = '';
                if (parent.currentLevel > 0) {
                    if (child.state === 'state-selected') statusClass = 'acquired';
                    else if (child.state === 'state-available') statusClass = 'available';
                }

                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                group.setAttribute('class', `cable-group ${statusClass}`);

                const pathBg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                pathBg.setAttribute('d', pathData); pathBg.setAttribute('class', 'cable-bg');

                const pathSep = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                pathSep.setAttribute('d', pathData); pathSep.setAttribute('class', 'cable-separator');

                const pathCore = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                pathCore.setAttribute('d', pathData); pathCore.setAttribute('class', 'cable-core');

                group.appendChild(pathBg); group.appendChild(pathSep); group.appendChild(pathCore);
                svgLayer.appendChild(group);
            });
        });
    }

    function getCircuitPath(x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        if (Math.abs(dx) < 2) return `M ${x1} ${y1} L ${x2} ${y2}`;

        const midY = y1 + (dy / 2);
        const cornerSize = Math.min(20, Math.abs(dy) / 2, Math.abs(dx) / 2);
        const signX = dx > 0 ? 1 : -1;
        const signY = dy > 0 ? 1 : -1;

        let d = `M ${x1} ${y1}`;
        d += ` L ${x1} ${midY - (signY * cornerSize)}`;
        d += ` L ${x1 + (signX * cornerSize)} ${midY}`;
        d += ` L ${x2 - (signX * cornerSize)} ${midY}`;
        d += ` L ${x2} ${midY + (signY * cornerSize)}`;
        d += ` L ${x2} ${y2}`;
        return d;
    }

    // =========================================
    //  TOOLTIPS & PRESETS
    // =========================================
    function showTooltip(e, node) {
        tooltip.style.display = 'block';
        tooltip.innerHTML = generateTooltipContent(node);
        tooltip.style.left = (e.clientX + 15) + 'px';
        tooltip.style.top = (e.clientY + 15) + 'px';
    }

    function refreshTooltip(node) {
        if (tooltip.style.display === 'block') tooltip.innerHTML = generateTooltipContent(node);
    }

    function generateTooltipContent(node) {
        let header = `<h3>${node.title}`;
        if (node.maxLevel > 1) header += ` <span style="font-size:0.7em; opacity:0.7;">(${node.currentLevel}/${node.maxLevel})</span>`;
        header += `</h3>`;
        let descHTML = node.descriptions.map((d, i) => {
            const isCurrent = (i + 1 <= node.currentLevel);
            const colorTitle = isCurrent ? 'var(--cp-yellow)' : '#555';
            const colorText = isCurrent ? 'white' : '#777';
            return `<div style="color:${colorText}; margin-bottom:5px;"><strong style="color:${colorTitle}">Lv${i + 1}:</strong> ${d}</div>`;
        }).join('');
        return header + descHTML;
    }

    function togglePresetsMenu() {
        const menu = container.querySelector('#presets-menu');
        menu.classList.toggle('open');
        if (menu.classList.contains('open')) renderPresetsList();
    }

    function renderPresetsList() {
        const list = container.querySelector('#presets-list');
        list.innerHTML = '';
        if (typeof BUILD_PRESETS === 'undefined') return;

        Object.keys(BUILD_PRESETS).forEach(name => {
            const presetData = BUILD_PRESETS[name];
            const div = document.createElement('div');
            div.className = 'preset-item';
            div.textContent = name;
            div.onclick = () => loadPreset(name);
            div.onmouseenter = (e) => {
                presetTooltip.style.display = 'block';
                presetTooltip.innerHTML = `<h4>${name}</h4>${presetData.description || ""}`;
                presetTooltip.style.left = (e.clientX + 20) + 'px';
                presetTooltip.style.top = (e.clientY - 20) + 'px';
            };
            div.onmouseleave = () => presetTooltip.style.display = 'none';
            list.appendChild(div);
        });
    }

    function loadPreset(name) {
        if (!confirm(`Load "${name}"?`)) return;
        const preset = BUILD_PRESETS[name];
        if (!preset) return;

        // Reset Internal
        availablePoints = preset.points;
        for (const k in GLOBAL_STATE) {
            Object.values(GLOBAL_STATE[k]).forEach(n => {
                n.currentLevel = 0;
                n.state = (n.parents.length === 0) ? 'state-available' : 'state-blocked';
            });
        }

        // Apply
        for (const [tName, savedNodes] of Object.entries(preset.treeData)) {
            if (GLOBAL_STATE[tName]) {
                for (const [nId, lvl] of Object.entries(savedNodes)) {
                    if (GLOBAL_STATE[tName][nId]) GLOBAL_STATE[tName][nId].currentLevel = lvl;
                }
            }
        }

        // Recalculate
        for (let i = 0; i < 3; i++) {
            for (const k in GLOBAL_STATE) {
                Object.values(GLOBAL_STATE[k]).forEach(n => {
                    if (n.currentLevel > 0) n.state = 'state-selected';
                    else {
                        if (n.parents.length === 0) n.state = 'state-available';
                        else {
                            const pMaxed = n.parents.every(pid => GLOBAL_STATE[k][pid] && GLOBAL_STATE[k][pid].state === 'state-selected' && GLOBAL_STATE[k][pid].currentLevel >= GLOBAL_STATE[k][pid].maxLevel);
                            n.state = pMaxed ? 'state-available' : 'state-blocked';
                        }
                    }
                });
            }
        }

        updatePointsUI();
        renderTree(currentTreeName);
        updateSummary(); // Placeholder si no usas panel
        togglePresetsMenu();
    }

    function resetAllTrees() {
        if (!confirm("Reset all?")) return;
        availablePoints = 80;
        for (const k in GLOBAL_STATE) {
            Object.values(GLOBAL_STATE[k]).forEach(n => {
                n.currentLevel = 0;
                n.state = (n.parents.length === 0) ? 'state-available' : 'state-blocked';
            });
        }
        updatePointsUI();
        renderTree(currentTreeName);
    }
    function updateSummary() {
        // Verificar si los elementos existen (seguridad)
        const listContainer = container.querySelector('#summary-content-list');
        const statsContainer = container.querySelector('#summary-content-stats');

        if (!listContainer || !statsContainer) return;

        listContainer.innerHTML = '';
        statsContainer.innerHTML = '';

        let hasItems = false;

        // Recorrer todo el estado global
        for (const [tName, tNodes] of Object.entries(GLOBAL_STATE)) {
            const activeNodes = Object.values(tNodes).filter(n => n.currentLevel > 0);

            if (activeNodes.length > 0) {
                hasItems = true;
                activeNodes.forEach(node => {
                    // Item para LISTA
                    const listItem = document.createElement('div');
                    listItem.className = 'summary-item';
                    listItem.innerHTML = `
                        <div class="sum-tree-name">${tName}</div>
                        <span class="sum-perk-name">${node.title}</span>
                        <span class="sum-rank">Rank ${node.currentLevel}/${node.maxLevel}</span>
                    `;
                    listContainer.appendChild(listItem);

                    // Item para STATS
                    // Obtenemos descripción del nivel actual (index = currentLevel - 1)
                    const descIndex = node.currentLevel - 1;
                    const descText = node.descriptions[descIndex] || "Effect active.";

                    const statItem = document.createElement('div');
                    statItem.className = 'summary-item';
                    statItem.innerHTML = `
                        <div class="sum-tree-name">${tName}</div>
                        <span class="sum-perk-name">${node.title} <span style="font-size:0.8em;color:var(--cp-yellow)">(${node.currentLevel})</span></span>
                        <div class="sum-desc">${descText}</div>
                    `;
                    statsContainer.appendChild(statItem);
                });
            }
        }

        if (!hasItems) {
            listContainer.innerHTML = '<div class="empty-msg">No perks selected.</div>';
            statsContainer.innerHTML = '<div class="empty-msg">No active effects.</div>';
        }
    }


    function handleResize() { drawConnections(GLOBAL_STATE[currentTreeName]); }

    // EXPOSICIÓN PÚBLICA
    return {
        init: init,
        destroy: destroy
    };

})();