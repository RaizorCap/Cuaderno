
// Crear corazones de fondo MÁS VISTOSOS
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['💖', '💕', '💗', '💓', '💝', '💘', '❤️', '🤍', '🩷', '💞'];
    const heartClasses = ['red', 'pink', 'rose', 'coral', 'magenta'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-bg ' + heartClasses[Math.floor(Math.random() * heartClasses.length)];
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 6 + 8) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.style.fontSize = (Math.random() * 2 + 2.5) + 'rem';

        container.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 15000);
    }, 1500);
}

// Crear flores cayendo
function createFlowers() {
    const container = document.getElementById('flowersContainer');
    const flowers = ['🌹', '🌷', '🌺', '🌸', '🌼', '🌻', '🌿'];

    setInterval(() => {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 8 + 8) + 's';
        flower.style.animationDelay = Math.random() * 3 + 's';

        container.appendChild(flower);

        setTimeout(() => {
            if (flower.parentNode) {
                flower.parentNode.removeChild(flower);
            }
        }, 15000);
    }, 2000);
}

// Crear destellos
function createSparkles() {
    const container = document.getElementById('sparklesContainer');

    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';

        container.appendChild(sparkle);

        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }, 500);
}

// Abrir carta
function openCard() {
    const cardClosed = document.getElementById('cardClosed');
    const cardOpen = document.getElementById('cardOpen');
    const envelopeFlap = document.getElementById('envelopeFlap');

    // Animar la apertura del sobre
    envelopeFlap.style.transform = 'rotateX(180deg)';

    setTimeout(() => {
        cardClosed.style.display = 'none';
        cardOpen.style.display = 'flex';
        cardOpen.style.flexDirection = 'column';
    }, 400);
}

// FUNCIÓN CONTINUAR - REDIRIGE A PARTE1/CUADERNO.HTML
function continueToNext() {
    // Efecto de transición suave antes de cambiar página
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = 'Parte1/Cuaderno.html';
    }, 500);
}

// FUNCIÓN CERRAR CARTA (ICONO X) - REGRESA AL SOBRE
function closeCard() {
    const cardClosed = document.getElementById('cardClosed');
    const cardOpen = document.getElementById('cardOpen');
    const envelopeFlap = document.getElementById('envelopeFlap');

    cardOpen.style.display = 'none';
    cardClosed.style.display = 'block';

    // Restaurar sobre
    setTimeout(() => {
        envelopeFlap.style.transform = 'rotateX(0deg)';
    }, 100);
}

// Event listeners
document.getElementById('cardClosed').addEventListener('click', openCard);

// Inicializar animaciones
window.onload = function () {
    createHearts();
    createFlowers();
    createSparkles();
};

// Efecto de vibración en dispositivos móviles al abrir
function vibrateDevice() {
    if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]);
    }
}

// Agregar vibración al abrir carta en móviles
document.getElementById('cardClosed').addEventListener('click', vibrateDevice);
