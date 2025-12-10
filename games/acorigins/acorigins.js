/* games/acorigins/acorigins.js */

const ACOrigins_Module = (function () {

    let container, svgLayer, nodesLayer, pointsDisplay, summaryPanel, summaryContent;
    let isInitialized = false;
    let skillsData = {};
    const TOTAL_POINTS = 50;
    let currentPoints = TOTAL_POINTS;

    const CONFIG = {
        colors: { lineInactive: "#2b4e6b", lineActive: "#ffd700" }
    };

    function init() {
        if (isInitialized) return;

        container = document.getElementById('acorigins-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'acorigins-container';
            document.body.appendChild(container);
        }

        container.innerHTML = `
            <button id="aco-exit-btn" onclick="ACOrigins_Module.destroy()">
                <span>❮</span> RETURN TO ANIMUS
            </button>
            <button id="aco-menu-btn" onclick="ACOrigins_Module.toggleSummary()" title="View Summary">
                ☰
            </button>

            <div id="aco-top-right">
                <span class="points-label">Ability Points</span>
                <div class="points-display" id="aco-points-count">${TOTAL_POINTS}</div>
                <button onclick="ACOrigins_Module.resetTree()" class="aco-btn-reset">RESET</button>
            </div>

            <div id="aco-summary-panel">
                <button class="panel-close-btn" onclick="ACOrigins_Module.toggleSummary()">×</button>
                <div class="summary-header"><h2>SKILL SUMMARY</h2></div>
                <div class="summary-content" id="aco-summ-content"></div>
            </div>

            <div id="aco-canvas-wrapper">
                <svg id="aco-svg-lines"></svg>
                <div id="aco-nodes-layer"></div>
            </div>
            
            <div id="aco-tooltip" class="hidden" style="display:none;"></div>
        `;

        svgLayer = document.getElementById('aco-svg-lines');
        nodesLayer = document.getElementById('aco-nodes-layer');
        pointsDisplay = document.getElementById('aco-points-count');
        summaryPanel = document.getElementById('aco-summary-panel');
        summaryContent = document.getElementById('aco-summ-content');

        loadDataAndLayout();
        renderTree();
        updateLogicAndVisuals();

        // Panning eliminado para dejar el layout fijo a la pantalla.

        container.style.display = 'block';
        isInitialized = true;
    }

    function loadDataAndLayout() {
        skillsData = JSON.parse(JSON.stringify(AC_ORIGINS_DATA));
        currentPoints = TOTAL_POINTS;

        if (typeof AC_LAYOUTS !== 'undefined') {
            Object.values(skillsData).forEach(node => {
                if (AC_LAYOUTS[node.group] && AC_LAYOUTS[node.group][node.id]) {
                    const pos = AC_LAYOUTS[node.group][node.id];
                    node.left = pos.left; node.top = pos.top;
                    node.x = parseInt(pos.left); node.y = parseInt(pos.top);
                } else {
                    node.x = 500; node.y = 500; // Fallback dentro de pantalla
                }
            });
        }
    }

    function renderTree() {
        svgLayer.innerHTML = '';
        nodesLayer.innerHTML = '';

        // Líneas
        Object.values(skillsData).forEach(node => {
            if (node.parents) {
                node.parents.forEach(pId => {
                    const parent = skillsData[pId];
                    if (parent) drawLine(parent, node);
                });
            }
        });

        // Nodos
        Object.values(skillsData).forEach(node => {
            const el = document.createElement('div');
            el.className = `aco-node`;
            el.id = `node-${node.id}`;
            el.style.left = node.left || (node.x + 'px');
            el.style.top = node.top || (node.y + 'px');
            el.innerHTML = `<span class="aco-icon">${node.icon}</span>`;

            el.onclick = () => handleNodeClick(node);
            el.oncontextmenu = (e) => handleNodeRightClick(e, node);
            el.onmouseenter = (e) => showTooltip(e, node);

            // CORRECCIÓN TOOLTIP: Asegurar referencia directa a la función
            el.onmouseleave = () => hideTooltip();

            nodesLayer.appendChild(el);
        });

        // CAMBIO: SVG al 100% de la ventana
        svgLayer.setAttribute('width', '100%');
        svgLayer.setAttribute('height', '100%');
    }

    function drawLine(parent, child) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const offset = 25;
        line.setAttribute('x1', parent.x + offset); line.setAttribute('y1', parent.y + offset);
        line.setAttribute('x2', child.x + offset); line.setAttribute('y2', child.y + offset);
        line.setAttribute('stroke-width', '2');
        line.id = `line-${parent.id}-${child.id}`;
        svgLayer.appendChild(line);
    }

    function updateLogicAndVisuals() {
        Object.values(skillsData).forEach(node => {
            if (node.state === 'selected') return;
            const isUnlockable = node.parents.length === 0 || node.parents.some(pid => skillsData[pid].state === 'selected');
            node.state = isUnlockable ? 'available' : 'locked';
        });

        Object.values(skillsData).forEach(node => {
            const el = document.getElementById(`node-${node.id}`);
            if (el) el.className = `aco-node state-${node.state}`;
        });

        Object.values(skillsData).forEach(child => {
            child.parents.forEach(pid => {
                const parent = skillsData[pid];
                const line = document.getElementById(`line-${parent.id}-${child.id}`);
                if (line) {
                    if (parent.state === 'selected') {
                        line.setAttribute('stroke', CONFIG.colors.lineActive);
                        line.setAttribute('stroke-width', '3');
                    } else {
                        line.setAttribute('stroke', CONFIG.colors.lineInactive);
                        line.setAttribute('stroke-width', '2');
                    }
                }
            });
        });

        pointsDisplay.innerText = currentPoints;
        updateSummary();
    }

    function handleNodeClick(node) {
        if (node.state === 'selected') return;
        if (node.state === 'available') {
            if (currentPoints >= node.points) {
                currentPoints -= node.points;
                node.state = 'selected';
                updateLogicAndVisuals();
            } else {
                alert("Not enough Ability Points.");
            }
        }
    }

    function handleNodeRightClick(e, node) {
        e.preventDefault();
        if (node.state !== 'selected') return;

        const children = Object.values(skillsData).filter(n => n.parents.includes(node.id));
        const hasPurchasedChildren = children.some(child => child.state === 'selected');

        if (hasPurchasedChildren) {
            alert("Cannot refund: Dependent skills are active.");
            return;
        }

        currentPoints += node.points;
        node.state = 'available';
        updateLogicAndVisuals();
    }

    function updateSummary() {
        const purchased = Object.values(skillsData).filter(n => n.state === 'selected');
        summaryContent.innerHTML = '';
        if (purchased.length === 0) {
            summaryContent.innerHTML = '<div style="color:#555; text-align:center; padding-top:20px;">No skills acquired.</div>';
            return;
        }
        purchased.forEach(node => {
            const div = document.createElement('div');
            div.className = 'summary-item';
            div.innerHTML = `<div class="sum-name">${node.title}</div><div class="sum-desc">${node.description}</div>`;
            summaryContent.appendChild(div);
        });
    }

    function toggleSummary() { summaryPanel.classList.toggle('open'); }

    function resetTree() {
        if (confirm("Reset Tree?")) {
            loadDataAndLayout();
            renderTree();
            updateLogicAndVisuals();
        }
    }

    function showTooltip(e, node) {
        const tt = document.getElementById('aco-tooltip');
        tt.style.display = 'block'; // Mostrar explícitamente
        tt.innerHTML = `<strong>${node.title} <span style="float:right;font-size:0.8em;color:#aaa">${node.points} PTS</span></strong>
                        <div style="font-size:0.8em;color:#888;margin-bottom:5px;">${node.group}</div>
                        <div>${node.description}</div>
                        <div style="margin-top:5px; font-size:0.7em; color:#666">Right-click to refund</div>`;
        tt.style.left = (e.clientX + 20) + 'px'; tt.style.top = (e.clientY + 20) + 'px';
        tt.classList.remove('hidden');
    }

    function hideTooltip() {
        const tt = document.getElementById('aco-tooltip');
        tt.style.display = 'none'; // Ocultar explícitamente
        tt.classList.add('hidden');
    }

    function destroy() {
        if (container) { container.remove(); container = null; }
        isInitialized = false;
    }

    return { init, destroy, toggleSummary, resetTree };
})();