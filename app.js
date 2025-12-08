// =========================================================
//  CYBERPUNK 2077 SKILL TREE BUILDER - CORE LOGIC
// =========================================================

// --- ESTADO GLOBAL ---
let GLOBAL_STATE = {};
let availablePoints = 80;
let currentTreeName = "Body";

// Referencias al DOM
const nodesLayer = document.getElementById('nodes-layer');
const svgLayer = document.getElementById('connections-svg');
const tooltip = document.getElementById('tooltip');
const pointsLabel = document.getElementById('points-count');
const summaryPanel = document.getElementById('summary-panel');

// =========================================================
//  INICIALIZACIÓN
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

    // 1. Cargar datos
    if (typeof CYBERPUNK_DATA !== 'undefined') {
        GLOBAL_STATE = JSON.parse(JSON.stringify(CYBERPUNK_DATA));
    } else {
        alert("ERROR: Ejecuta el script de Python para generar skills_data.js");
        return;
    }

    // 2. Configurar pestañas
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // CORRECCIÓN: Usar 'currentTarget' asegura que tomamos el botón, 
            // aunque el usuario haya hecho clic en la imagen o el texto de adentro.
            const clickedBtn = e.currentTarget;

            // UI Visual
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            clickedBtn.classList.add('active');

            // Lógica
            currentTreeName = clickedBtn.getAttribute('data-tree');
            renderTree(currentTreeName);
        });
    });

    // 3. Render inicial
    updatePointsUI();
    renderTree("Body");

    window.addEventListener('resize', () => drawConnections());
});

// =========================================================
//  RENDERIZADO PRINCIPAL
// =========================================================

function renderTree(treeName) {
    const treeData = GLOBAL_STATE[treeName];
    if (!treeData) return;

    nodesLayer.innerHTML = '';
    svgLayer.innerHTML = '';

    drawVisualGuides();

    Object.values(treeData).forEach(node => {
        // Calcular y guardar el tipo de nodo en memoria para usarlo siempre
        if (!node.nodeType) {
            if (node.levelReq >= 20) node.nodeType = 'type-ultimate';
            else if (node.children.length >= 2) node.nodeType = 'type-major';
            else node.nodeType = 'type-minor';
        }

        const el = createNodeElement(node, treeData);
        nodesLayer.appendChild(el);

        // Posicionamiento
        if (typeof CUSTOM_LAYOUTS !== 'undefined' &&
            CUSTOM_LAYOUTS[treeName] &&
            CUSTOM_LAYOUTS[treeName][node.id]) {

            const pos = CUSTOM_LAYOUTS[treeName][node.id];
            el.style.left = pos.left;
            el.style.top = pos.top;
        } else {
            el.style.left = '50px';
            el.style.top = '50px';
        }
    });

    setTimeout(() => drawConnections(treeData), 50);
}

function createNodeElement(node, treeData) {
    const div = document.createElement('div');
    div.className = `perk-node ${node.nodeType} ${node.state}`;
    div.id = `node-${node.id}`;

    // 1. APLICAR IMAGEN DE FONDO (TILE) INICIAL
    const tileUrl = getTileImage(node.nodeType, node.state);
    div.style.backgroundImage = `url('${tileUrl}')`;

    // 2. ICONO DEL PERK
    if (node.icon) {
        const img = document.createElement('img');
        img.src = node.icon;
        img.className = 'perk-icon';
        img.draggable = false;
        div.appendChild(img);
    } else {
        div.style.color = "white";
        div.style.fontSize = "8px";
        div.textContent = node.title;
    }

    // 3. CONTADOR
    if (node.maxLevel > 1) {
        const counter = document.createElement('div');
        counter.className = 'level-counter';
        counter.id = `cnt-${node.id}`;
        counter.textContent = `${node.currentLevel}/${node.maxLevel}`;
        div.appendChild(counter);
    }

    node.domElement = div;

    // EVENTOS
    div.addEventListener('click', () => handleLeftClick(node.id, treeData));
    div.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        handleRightClick(node.id, treeData);
    });
    div.addEventListener('mouseenter', (e) => showTooltip(e, node));
    div.addEventListener('mouseleave', () => tooltip.style.display = 'none');

    return div;
}

// --- FUNCIÓN CRÍTICA: ELEGIR LA IMAGEN ---
function getTileImage(type, state) {
    // Normalizar nombres para coincidir con tus archivos
    // type: type-minor, type-major, type-ultimate
    // state: state-blocked, state-available, state-selected

    let typeName = 'minor';
    if (type === 'type-major') typeName = 'major';
    if (type === 'type-ultimate') typeName = 'ultimate';

    let stateName = 'blocked';
    if (state === 'state-available') stateName = 'available';
    if (state === 'state-selected') stateName = 'selected';

    // Ruta exacta a assets/tiles/nombre_estado.webp
    return `assets/tiles/${typeName}_${stateName}.png`;
}

// --- FUNCIÓN CRÍTICA: ACTUALIZAR VISUALES ---
function updateNodeVisuals(node) {
    if (!node.domElement) return;

    // 1. Actualizar Clases CSS
    node.domElement.classList.remove('state-blocked', 'state-available', 'state-selected');
    node.domElement.classList.add(node.state);

    // 2. FORZAR CAMBIO DE IMAGEN DE FONDO
    // Usamos node.nodeType que guardamos en memoria
    const newTileUrl = getTileImage(node.nodeType, node.state);
    node.domElement.style.backgroundImage = `url('${newTileUrl}')`;

    // 3. Actualizar contador
    if (node.maxLevel > 1) {
        const cnt = document.getElementById(`cnt-${node.id}`);
        if (cnt) cnt.textContent = `${node.currentLevel}/${node.maxLevel}`;
    }
}


function drawVisualGuides() {

}


function updatePointsUI() {
    pointsLabel.textContent = availablePoints;
    pointsLabel.style.color = (availablePoints === 0) ? '#ea2e2e' : '#fcee0a';
}


// =========================================================
//  LÓGICA DE JUEGO
// =========================================================

function handleLeftClick(id, treeData) {
    const node = treeData[id];
    const canBuy = (node.state === 'state-available' ||
        (node.state === 'state-selected' && node.currentLevel < node.maxLevel));

    if (canBuy && availablePoints > 0) {
        node.currentLevel++;
        availablePoints--;

        // CAMBIO DE ESTADO IMPORTANTE
        if (node.currentLevel > 0) node.state = 'state-selected';

        updatePointsUI();
        updateNodeVisuals(node); // <-- Esto llamará a la nueva imagen

        if (node.currentLevel === node.maxLevel) {
            node.children.forEach(childId => checkUnlock(childId, treeData));
        }

        drawConnections(treeData);
        updateSummary();
        refreshTooltip(node);
    } else if (availablePoints === 0 && canBuy) {
        pointsLabel.parentElement.style.borderColor = 'red';
        setTimeout(() => pointsLabel.parentElement.style.borderColor = 'var(--cp-blue)', 300);
    }
}

function handleRightClick(id, treeData) {
    const node = treeData[id];

    if (node.currentLevel > 0) {
        // Verificar dependencias
        let dependencyIssue = false;
        if (node.currentLevel === node.maxLevel) {
            dependencyIssue = node.children.some(childId => {
                const child = treeData[childId];
                return child && child.currentLevel > 0;
            });
        }

        if (dependencyIssue) {
            alert("⚠️ No puedes retirar este perk porque tiene hijos activos.");
            return;
        }

        node.currentLevel--;
        availablePoints++;

        // CAMBIO DE ESTADO IMPORTANTE
        if (node.currentLevel === 0) {
            node.state = 'state-available';
        }

        if (node.currentLevel < node.maxLevel) {
            node.children.forEach(childId => checkLock(childId, treeData));
        }

        updatePointsUI();
        updateNodeVisuals(node); // <-- Esto llamará a la nueva imagen
        drawConnections(treeData);
        updateSummary();
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

// =========================================================
//  SVG & TOOLTIPS & PANEL
// =========================================================

// =========================================================
//  SVG & CONEXIONES (ALGORITMO PCB MEJORADO)
// =========================================================

function drawConnections(treeData = null) {
    if (!treeData) treeData = GLOBAL_STATE[currentTreeName];
    if (!treeData) return;

    svgLayer.innerHTML = '';

    // Obtenemos el rectángulo del contenedor para calcular coordenadas relativas
    const containerRect = nodesLayer.getBoundingClientRect();

    Object.values(treeData).forEach(parent => {
        if (!parent.domElement) return;

        parent.children.forEach(childId => {
            const child = treeData[childId];
            if (!child || !child.domElement) return;

            // 1. Obtener dimensiones
            const pRect = parent.domElement.getBoundingClientRect();
            const cRect = child.domElement.getBoundingClientRect();

            // 2. CALCULO DE BORDES (Edge-to-Edge)
            // En lugar del centro, salimos del borde del icono para mayor limpieza.

            // Padre: Salimos desde ARRIBA (Top Center)
            // (Restamos el top del contenedor para hacerlo relativo)
            const startX = (pRect.left - containerRect.left) + (pRect.width / 2);
            const startY = (pRect.top - containerRect.top); // Borde superior exacto

            // Hijo: Llegamos por ABAJO (Bottom Center)
            const endX = (cRect.left - containerRect.left) + (cRect.width / 2);
            const endY = (cRect.bottom - containerRect.top); // Borde inferior exacto

            // 3. Generar Camino con Algoritmo "Manhattan Chamfer"
            const pathData = getCircuitPath(startX, startY, endX, endY);

            // 4. Determinar Estado
            let statusClass = '';
            // La línea brilla si el PADRE tiene al menos 1 nivel (conexión activa)
            if (parent.currentLevel > 0) {
                if (child.state === 'state-selected') statusClass = 'acquired';
                else if (child.state === 'state-available') statusClass = 'available';
            }

            // 5. Construir el SVG (Capas para efecto 3D/Cable)
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.setAttribute('class', `cable-group ${statusClass}`);

            // Capa Fondo (Color Principal)
            const pathBg = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathBg.setAttribute('d', pathData);
            pathBg.setAttribute('class', 'cable-bg');

            // Capa Separadora (Corte negro para simular cables paralelos)
            const pathSep = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathSep.setAttribute('d', pathData);
            pathSep.setAttribute('class', 'cable-separator');

            // Capa Núcleo (Detalle fino animado)
            const pathCore = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            pathCore.setAttribute('d', pathData);
            pathCore.setAttribute('class', 'cable-core');

            group.appendChild(pathBg);
            group.appendChild(pathSep);
            group.appendChild(pathCore);

            svgLayer.appendChild(group);
        });
    });
}

// --- ALGORITMO MATEMÁTICO DE TRAZADO ---
// Crea una ruta: Vertical -> Diagonal -> Horizontal -> Diagonal -> Vertical
function getCircuitPath(x1, y1, x2, y2) {
    // Distancias
    const dx = x2 - x1;
    const dy = y2 - y1; // Será negativo porque y2 está "arriba" (menor valor)

    // A. Si están alineados verticalmente (casi), línea recta simple
    if (Math.abs(dx) < 2) {
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    // B. Algoritmo de "Codo Simétrico"
    // Buscamos el punto medio vertical entre los dos nodos
    const midY = y1 + (dy / 2);

    // Tamaño del corte de esquina (Chamfer) 
    // Usamos Math.min para que si están muy cerca no se rompa el dibujo
    const cornerSize = Math.min(20, Math.abs(dy) / 2, Math.abs(dx) / 2);

    // Dirección del movimiento horizontal (1 = Derecha, -1 = Izquierda)
    const signX = dx > 0 ? 1 : -1;
    // Dirección del movimiento vertical (siempre -1 aquí porque subimos, pero por si acaso)
    const signY = dy > 0 ? 1 : -1;

    // Construcción del Path (SVG d command)
    let d = `M ${x1} ${y1}`;

    // 1. Subir verticalmente hasta acercarse al medio
    // (midY - cornerSize si vamos subiendo)
    d += ` L ${x1} ${midY - (signY * cornerSize)}`;

    // 2. Primer Corte Diagonal (45 grados)
    // Nos movemos 'corner' en X y 'corner' en Y
    d += ` L ${x1 + (signX * cornerSize)} ${midY}`;

    // 3. Viaje Horizontal hasta acercarse al destino X
    d += ` L ${x2 - (signX * cornerSize)} ${midY}`;

    // 4. Segundo Corte Diagonal (45 grados)
    // Nos movemos el resto en X y retomamos el camino Y
    d += ` L ${x2} ${midY + (signY * cornerSize)}`;

    // 5. Tramo final vertical hasta el hijo
    d += ` L ${x2} ${y2}`;

    return d;
}

function showTooltip(e, node) {
    tooltip.style.display = 'block';
    tooltip.innerHTML = generateTooltipContent(node);
    tooltip.style.left = (e.clientX + 15) + 'px';
    tooltip.style.top = (e.clientY + 15) + 'px';
}

function refreshTooltip(node) {
    if (tooltip.style.display === 'block') {
        tooltip.innerHTML = generateTooltipContent(node);
    }
}

function generateTooltipContent(node) {
    let header = `<h3>${node.title}`;
    if (node.maxLevel > 1) header += ` <span style="font-size:0.7em; opacity:0.7;">(${node.currentLevel}/${node.maxLevel})</span>`;
    header += `</h3>`;

    let descHTML = node.descriptions.map((d, i) => {
        const isCurrent = (i + 1 <= node.currentLevel);
        const colorTitle = isCurrent ? 'var(--cp-yellow)' : '#555';
        const colorText = isCurrent ? 'white' : '#777';
        return `<div style="color:${colorText}; margin-bottom:5px;">
            <strong style="color:${colorTitle}">Lv${i + 1}:</strong> ${d}
        </div>`;
    }).join('');

    return header + descHTML;
}

function toggleSummary() {
    summaryPanel.classList.toggle('open');
}

function switchSummaryTab(tabName) {
    document.querySelectorAll('.s-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.summary-content').forEach(c => c.classList.remove('active'));

    const tabIndex = tabName === 'list' ? 0 : 1;
    document.querySelectorAll('.s-tab')[tabIndex].classList.add('active');
    document.getElementById(`summary-content-${tabName}`).classList.add('active');
}

function updateSummary() {
    const listContainer = document.getElementById('summary-content-list');
    const statsContainer = document.getElementById('summary-content-stats');
    listContainer.innerHTML = '';
    statsContainer.innerHTML = '';

    let hasItems = false;
    for (const [tName, tNodes] of Object.entries(GLOBAL_STATE)) {
        const activeNodes = Object.values(tNodes).filter(n => n.currentLevel > 0);
        if (activeNodes.length > 0) {
            hasItems = true;
            activeNodes.forEach(node => {
                // List Item
                const li = document.createElement('div');
                li.className = 'summary-item';
                li.innerHTML = `<div class="sum-tree-name">${tName}</div><span class="sum-perk-name">${node.title}</span><span class="sum-rank">${node.currentLevel}/${node.maxLevel}</span>`;
                listContainer.appendChild(li);

                // Stats Item
                const desc = node.descriptions[node.currentLevel - 1] || "Active";
                const si = document.createElement('div');
                si.className = 'summary-item';
                si.innerHTML = `<div class="sum-tree-name">${tName}</div><span class="sum-perk-name">${node.title}</span><div class="sum-desc">${desc}</div>`;
                statsContainer.appendChild(si);
            });
        }
    }
    if (!hasItems) {
        listContainer.innerHTML = '<div class="empty-msg">No perks selected.</div>';
        statsContainer.innerHTML = '<div class="empty-msg">No active effects.</div>';
    }
}

function resetAllTrees() {
    if (!confirm("¿Resetear toda la build?")) return;
    availablePoints = 80;
    updatePointsUI();
    for (const k in GLOBAL_STATE) {
        Object.values(GLOBAL_STATE[k]).forEach(n => {
            n.currentLevel = 0;
            n.state = (n.parents.length === 0) ? 'state-available' : 'state-blocked';
        });
    }
    renderTree(currentTreeName);
    updateSummary();
    summaryPanel.classList.remove('open');
}

// =========================================================
//  SISTEMA DE PRESETS
// =========================================================

// Crear el tooltip de presets dinámicamente
const presetTooltip = document.createElement('div');
presetTooltip.id = 'preset-tooltip';
document.body.appendChild(presetTooltip);

function togglePresetsMenu() {
    const menu = document.getElementById('presets-menu');
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        renderPresetsList();
    }
}

function renderPresetsList() {
    const list = document.getElementById('presets-list');
    list.innerHTML = '';

    if (typeof BUILD_PRESETS === 'undefined') {
        list.innerHTML = '<div style="padding:10px;color:red">No data</div>';
        return;
    }

    Object.keys(BUILD_PRESETS).forEach(name => {
        const presetData = BUILD_PRESETS[name];

        const div = document.createElement('div');
        div.className = 'preset-item';
        div.textContent = name;

        // Cargar Preset al Click
        div.onclick = () => loadPreset(name);

        // Mostrar Descripción al Hover
        div.onmouseenter = (e) => {
            presetTooltip.style.display = 'block';
            presetTooltip.innerHTML = `<h4>${name}</h4>${presetData.description || "No description."}`;
            movePresetTooltip(e);
        };
        div.onmousemove = (e) => movePresetTooltip(e);
        div.onmouseleave = () => {
            presetTooltip.style.display = 'none';
        };

        list.appendChild(div);
    });
}

function movePresetTooltip(e) {
    // Posicionar a la derecha del cursor para que no tape el menú
    presetTooltip.style.left = (e.clientX + 20) + 'px';
    // Intentar centrar verticalmente o seguir al mouse
    presetTooltip.style.top = (e.clientY - 20) + 'px';
}

function loadPreset(name) {
    if (!confirm(`Load "${name}"? Current progress will be lost.`)) return;

    const preset = BUILD_PRESETS[name];
    if (!preset) return;

    resetInternalState();

    availablePoints = preset.points;

    for (const [treeName, savedNodes] of Object.entries(preset.treeData)) {
        if (GLOBAL_STATE[treeName]) {
            for (const [nodeId, level] of Object.entries(savedNodes)) {
                if (GLOBAL_STATE[treeName][nodeId]) {
                    GLOBAL_STATE[treeName][nodeId].currentLevel = level;
                }
            }
        }
    }

    recalculateAllStates();

    updatePointsUI();
    renderTree(currentTreeName);
    updateSummary();
    togglePresetsMenu();
}

function resetInternalState() {
    availablePoints = 80;
    for (const treeKey in GLOBAL_STATE) {
        Object.values(GLOBAL_STATE[treeKey]).forEach(node => {
            node.currentLevel = 0;
            node.state = (node.parents.length === 0) ? 'state-available' : 'state-blocked';
        });
    }
}

function recalculateAllStates() {
    for (let i = 0; i < 3; i++) {
        for (const treeKey in GLOBAL_STATE) {
            const treeNodes = GLOBAL_STATE[treeKey];
            Object.values(treeNodes).forEach(node => {
                if (node.currentLevel > 0) {
                    node.state = 'state-selected';
                } else {
                    if (node.parents.length === 0) {
                        node.state = 'state-available';
                    } else {
                        const parentsMaxed = node.parents.every(pid => {
                            const pNode = treeNodes[pid];
                            return pNode && pNode.state === 'state-selected' && pNode.currentLevel >= pNode.maxLevel;
                        });
                        node.state = parentsMaxed ? 'state-available' : 'state-blocked';
                    }
                }
            });
        }
    }
}