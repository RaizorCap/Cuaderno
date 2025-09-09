
const cardContainer = document.getElementById('cardContainer');
const giftBox = document.getElementById('giftBox');
const letterModal = document.getElementById('letterModal');
const letterClose = document.getElementById('letterClose');
const extraButton = document.getElementById('extraButton');
const extraModal = document.getElementById('extraModal');
const extraClose = document.getElementById('extraClose');
const callButton = document.getElementById('callButton');
const messageButton = document.getElementById('messageButton');
const personalMessage = document.getElementById('personalMessage');

// Voltear tarjeta
cardContainer.addEventListener('click', function (e) {
    if (!e.target.closest('.gift-box')) {
        this.classList.toggle('flipped');
    }
});

// Abrir regalo
giftBox.addEventListener('click', function (e) {
    e.stopPropagation();
    letterModal.style.display = 'flex';

    // Animación de apertura del regalo
    this.style.transform = 'scale(1.2) rotateY(20deg)';
    setTimeout(() => {
        this.style.transform = 'scale(1) rotateY(0deg)';
    }, 300);
});

// Cerrar carta
letterClose.addEventListener('click', function () {
    letterModal.style.display = 'none';
});

// Abrir modal extra
extraButton.addEventListener('click', function () {
    extraModal.style.display = 'flex';
});

// Cerrar modal extra
extraClose.addEventListener('click', function () {
    extraModal.style.display = 'none';
});

// Botón de llamada - Abre WhatsApp para llamar
callButton.addEventListener('click', function () {
    const phoneNumber = '51989893469';
    const whatsappCallUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappCallUrl, '_blank');
});

// Botón de mensaje - Envía mensaje directo por WhatsApp
messageButton.addEventListener('click', function () {
    const phoneNumber = '51989893469';
    const message = encodeURIComponent('Acepto, la cita');
    const whatsappMessageUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappMessageUrl, '_blank');
});

// Cerrar modales con clic fuera
letterModal.addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

extraModal.addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Animación de entrada
window.addEventListener('load', function () {
    cardContainer.style.transform = 'scale(0)';
    cardContainer.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

    setTimeout(() => {
        cardContainer.style.transform = 'scale(1)';
    }, 200);
});

// Efecto de partículas flotantes mejorado
function createFloatingParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.fontSize = Math.random() * 15 + 12 + 'px';
    particle.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 70%)`;
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '0';

    const particles = ['✨', '💫', '⭐', '🌟', '💖', '💕', '🎃', '🦇'];
    particle.textContent = particles[Math.floor(Math.random() * particles.length)];

    document.body.appendChild(particle);

    const duration = Math.random() * 4000 + 3000;
    const drift = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 720 - 360;

    particle.animate([
        {
            transform: `translateY(0) translateX(0) rotate(0deg)`,
            opacity: 0
        },
        {
            transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px) rotate(${rotation}deg)`,
            opacity: 1
        }
    ], {
        duration: duration,
        easing: 'linear'
    }).onfinish = () => particle.remove();
}

// Crear partículas cada cierto tiempo
setInterval(createFloatingParticle, 1200);

// Partículas especiales al hacer hover en el regalo
giftBox.addEventListener('mouseenter', function () {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createFloatingParticle(), i * 100);
    }
});

// Efecto de sonido simulado (visual)
function showSoundEffect(element, text) {
    const soundEffect = document.createElement('div');
    soundEffect.style.position = 'absolute';
    soundEffect.style.top = '50%';
    soundEffect.style.left = '50%';
    soundEffect.style.transform = 'translate(-50%, -50%)';
    soundEffect.style.color = '#ffd700';
    soundEffect.style.fontSize = '20px';
    soundEffect.style.fontWeight = 'bold';
    soundEffect.style.pointerEvents = 'none';
    soundEffect.style.zIndex = '1000';
    soundEffect.textContent = text;

    element.style.position = 'relative';
    element.appendChild(soundEffect);

    soundEffect.animate([
        { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
        { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        { opacity: 0, transform: 'translate(-50%, -50%) scale(1.5)' }
    ], {
        duration: 1000,
        easing: 'ease-out'
    }).onfinish = () => soundEffect.remove();
}

// Efectos de sonido visuales
giftBox.addEventListener('click', function () {
    showSoundEffect(this, '🎵 ¡POP! 🎵');
});

extraButton.addEventListener('click', function () {
    showSoundEffect(this, '✨ ¡MAGIA! ✨');
});

callButton.addEventListener('click', function () {
    showSoundEffect(this, '📞 ¡RING! 📞');
});

messageButton.addEventListener('click', function () {
    showSoundEffect(this, '💬 ¡ENVIADO! 💬');
});

// Mensaje personalizado con almacenamiento (sin localStorage por restricciones)
let savedMessage = '';
personalMessage.addEventListener('input', function () {
    savedMessage = this.value;
});

// Animaciones adicionales para elementos Tim Burton
function createTimBurtonAnimation() {
    const elements = document.querySelectorAll('.tim-burton-element');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                element.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        }, index * 200);
    });
}

// Activar animación Tim Burton cuando se abre el modal extra
extraButton.addEventListener('click', function () {
    setTimeout(createTimBurtonAnimation, 500);
});

// Efecto de temblar para elementos góticos
function addShakeEffect() {
    const skulls = document.querySelectorAll('.skull');
    skulls.forEach(skull => {
        skull.style.animation = 'none';
        setTimeout(() => {
            skull.style.animation = 'float 6s ease-in-out infinite, shake 0.5s ease-in-out';
        }, 10);
    });
}

// CSS para el efecto shake
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateY(0) rotate(0deg); }
                25% { transform: translateY(-5px) rotate(-2deg); }
                75% { transform: translateY(5px) rotate(2deg); }
            }
        `;
document.head.appendChild(shakeStyle);

// Activar efecto shake periódicamente
setInterval(addShakeEffect, 10000);

// Mejora del efecto bow shine
const bow = document.querySelector('.bow');
setInterval(() => {
    bow.style.transform = 'translateX(-50%) scale(1.1)';
    setTimeout(() => {
        bow.style.transform = 'translateX(-50%) scale(1)';
    }, 200);
}, 3000);
