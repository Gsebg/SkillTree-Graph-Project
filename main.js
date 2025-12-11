// =========================================
// 1. BASE DE DATOS DE JUEGOS
// =========================================
const GAMES_DB = [
    {
        id: 'cp2077',
        title: 'Cyberpunk 2077',
        desc: 'Rule Night City and rise to the big leagues',
        img: 'assets/covers/cover_cp2077.jpg',
        color: '#00f0ff' // Cyan Neón
    },
    {
        id: 'skyrim',
        title: 'The Elder Scrolls V',
        desc: 'The Path of the Dovahkiin',
        img: 'assets/covers/cover_skyrim.jpg',
        color: '#c0c0c0' // Plata
    },
    {
        id: 'acorigins',
        title: 'AC: Origins',
        desc: 'The Egyptian Creed',
        img: 'assets/covers/cover_acorigins.jpg',
        color: '#ffd700' // Dorado
    }
];

// =========================================
// 2. INICIALIZACIÓN
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    initDynamicSubtitle();
    init3DCarousel();
});


// =========================================
// 3. SUBTÍTULO DINÁMICO
// =========================================
function initDynamicSubtitle() {
    const textElement = document.getElementById('dynamic-text');
    if (!textElement) return;

    const phrases = [
        "Forge your ultimate build.",
        "Discover the most meta-defining setups.",
        "Share your unleashed configuration.",
        "Maximize your stats like a pro.",
        "Dive into the nexus of abilities."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}


// =========================================
// 4. CARRUSEL 3D INFINITO (AUTO-SCROLL)
// =========================================

let wheel;
let cards = [];
let scrollProgress = 0;
let scrollTarget = 0;

// --- CONFIGURACIÓN ---
const RADIUS = 150;
const AUTO_SPEED = 0.05;
let isHovering = false;

function init3DCarousel() {
    wheel = document.getElementById('wheel');
    const container = document.getElementById('carousel-section');

    if (!wheel || !container) return;

    // EVENTOS DE HOVER
    container.addEventListener('mouseenter', () => { isHovering = true; });
    container.addEventListener('mouseleave', () => { isHovering = false; });

    // Clonación para Loop
    const loopCount = 5;
    let displayList = [];
    for (let i = 0; i < loopCount; i++) {
        displayList = displayList.concat(GAMES_DB);
    }

    // Crear Tarjetas
    displayList.forEach((game, index) => {
        const card = document.createElement('div');
        card.className = 'game-card-3d';
        card.style.backgroundImage = `url('${game.img}')`;

        // EVENTO CLICK: Añadido log para depuración
        card.onclick = (e) => {
            // Evitar que el click se propague si hay drag (opcional, por ahora directo)
            console.log("Tarjeta clickeada:", game.id);
            loadGameModule(game.id);
        };

        card.innerHTML = `
            <div class="card-overlay"></div>
            <div class="card-content">
                <h2 class="font-tech text-3xl font-bold text-white mb-1" style="text-shadow: 0 0 10px ${game.color}">
                    ${game.title}
                </h2>
                <p class="text-gray-200 text-sm font-medium opacity-90">
                    ${game.desc}
                </p>
            </div>
        `;

        wheel.appendChild(card);
        cards.push({ el: card, index: index, total: displayList.length, data: game });
    });

    requestAnimationFrame(animateWheel);

    // Scroll Manual
    container.addEventListener('wheel', (e) => {
        e.preventDefault();
        isHovering = true;
        scrollTarget += e.deltaY * 0.05;
    }, { passive: false });
}

// MOTOR DE ANIMACIÓN
function animateWheel() {
    if (!isHovering) {
        scrollTarget += AUTO_SPEED;
    }

    // Interpolación
    scrollProgress += (scrollTarget - scrollProgress) * 0.05;

    const totalCards = cards.length;
    const step = 360 / totalCards;

    cards.forEach((cardObj) => {
        let angle = (cardObj.index * step) - scrollProgress;
        const rad = angle * (Math.PI / 180);

        const cos = Math.cos(rad);
        const y = Math.sin(rad) * RADIUS;

        // --- CORRECCIÓN DE PROFUNDIDAD (Z) ---
        // Antes: cos * RADIUS - RADIUS (Max Z = 0)
        // Ahora: cos * RADIUS (Max Z = 200). 
        // Esto trae la tarjeta 200px hacia el frente, asegurando que sea clickeable.
        const z = cos * RADIUS;

        // Escala
        const scale = (cos + 1.5) * 0.45;

        // Opacidad
        let opacity = Math.pow((cos + 1) / 2, 2);
        if (cos > 0.99) opacity = 1;

        // Z-Index (Importante para clicks)
        const zIndex = Math.floor(cos * 1000); // Rango más amplio para evitar conflictos

        // Aplicar estilos
        cardObj.el.style.transform = `translate3d(0, ${y}px, ${z}px) scale(${scale})`;
        cardObj.el.style.opacity = opacity;
        cardObj.el.style.zIndex = zIndex;
        // Asegurar que reciba eventos de puntero
        cardObj.el.style.pointerEvents = opacity > 0.5 ? 'auto' : 'none';

        // Efectos de Foco
        if (cos > 0.98) {
            cardObj.el.style.borderColor = cardObj.data.color;
            cardObj.el.style.boxShadow = `0 0 30px ${cardObj.data.color}`;
            cardObj.el.style.filter = 'brightness(1.1)';
        } else {
            cardObj.el.style.borderColor = 'rgba(255,255,255,0.05)';
            cardObj.el.style.boxShadow = 'none';
            cardObj.el.style.filter = `brightness(${0.4 + opacity * 0.6})`;
        }
    });

    requestAnimationFrame(animateWheel);
}


// =========================================
// 5. CARGA DE MÓDULOS
// =========================================
window.loadGameModule = function (gameId) {

    const heroSection = document.getElementById('hero-section');
    const carouselSection = document.getElementById('carousel-section');
    if (heroSection) heroSection.style.display = 'none';
    if (carouselSection) carouselSection.style.display = 'none';
    // Ocultar carrusel y mostrar loader si fuera necesario (lógica visual global)
    // ...

    if (gameId === 'cp2077') {
        // --- LOGICA CYBERPUNK 2077 ---
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'games/cp2077/cp2077.css';
        link.id = 'cp2077-css';
        document.head.appendChild(link);

        loadScriptsSequentially([
            'games/cp2077/skills_data.js',
            'games/cp2077/layout_config.js',
            'games/cp2077/presets_data.js',
            'games/cp2077/cp2077.js'
        ], () => {
            if (typeof CP2077_Module !== 'undefined') {
                CP2077_Module.init();
            } else {
                alert("Error: No se pudo cargar el módulo CP2077.");
            }
        });

    } else if (gameId === 'acorigins') {
        // --- AQUÍ ESTÁ EL CAMBIO ---

        // 1. Cargar CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'games/acorigins/acorigins.css';
        link.id = 'acorigins-css';
        document.head.appendChild(link);

        // 2. Cargar Scripts (AÑADIMOS layout_config.js)
        loadScriptsSequentially([
            'games/acorigins/skills_data.js',   // Datos base (generados por Python)
            'games/acorigins/layout_config.js', // <--- ¡TU NUEVO ARCHIVO DE POSICIONES!
            'games/acorigins/acorigins.js'      // Lógica
        ], () => {
            // 3. Iniciar
            if (typeof ACOrigins_Module !== 'undefined') {
                ACOrigins_Module.init();
            } else {
                console.error("Error: No se cargó ACOrigins_Module");
            }
        });

    } else if (gameId === 'skyrim') {
        // --- BLOQUE SKYRIM ---
        // 1. Cargar CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'games/skyrim/skyrim.css';
        link.id = 'skyrim-css';
        document.head.appendChild(link);

        // 2. Cargar Scripts
        loadScriptsSequentially([
            'games/skyrim/skills_data.js',   // Datos (Python)
            'games/skyrim/layout_config.js', // Posiciones
            'games/skyrim/skyrim.js'         // Lógica
        ], () => {
            if (typeof Skyrim_Module !== 'undefined') {
                Skyrim_Module.init();
            } else {
                console.error("Error cargando Skyrim.");
                if (window.restoreMainMenu) window.restoreMainMenu();
            }
        });

    } else {
        // Otros juegos (Skyrim, etc.)
        alert("En desarrollo... Próximamente.");
    }
};

function loadScriptsSequentially(scripts, callback) {
    if (scripts.length === 0) {
        callback();
        return;
    }
    const src = scripts.shift();
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => loadScriptsSequentially(scripts, callback);
    script.onerror = () => alert(`Error cargando script: ${src}\nVerifica la estructura de carpetas.`);
    document.body.appendChild(script);
}

// Función Global para SALIR del juego
window.goBackToLauncher = function () {
    if (typeof CP2077_Module !== 'undefined') {
        CP2077_Module.destroy();
    }
    const css = document.getElementById('cp2077-css');
    if (css) css.remove();
};

window.restoreMainMenu = function () {
    const heroSection = document.getElementById('hero-section');
    const carouselSection = document.getElementById('carousel-section');

    // Restaurar visibilidad (quitamos el display:none que ponen los juegos)
    if (heroSection) heroSection.style.display = '';
    if (carouselSection) carouselSection.style.display = '';
}; 
