
let currentPage = 0;
let isBookOpened = false;
const totalPages = 12;

// Create floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '🌸', '✨'];

    setInterval(() => {
        if (Math.random() < 0.3) {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
            heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 15000);
        }
    }, 2000);
}

// Create spiral holes dynamically based on content height
function createSpiralHoles() {
    const allPages = document.querySelectorAll('.page');

    allPages.forEach(page => {
        const spiralContainer = page.querySelector('.spiral-holes');
        const notebookSheet = page.querySelector('.notebook-sheet');

        if (spiralContainer && notebookSheet) {
            // Clear existing holes
            spiralContainer.innerHTML = '';

            // Calculate how many holes we need based on content height
            const containerHeight = spiralContainer.offsetHeight;
            const holeSpacing = 56; // 16px hole + 40px margin
            const numHoles = Math.floor(containerHeight / holeSpacing) + 2;

            // Create the holes
            for (let i = 0; i < numHoles; i++) {
                const hole = document.createElement('div');
                hole.className = 'spiral-hole';
                hole.style.top = (i * holeSpacing) + 'px';
                spiralContainer.appendChild(hole);
            }
        }
    });
}

function openBook() {
    if (!isBookOpened) {
        const book = document.getElementById('book');
        const cover = document.getElementById('cover');

        book.classList.add('opening');

        setTimeout(() => {
            book.classList.add('opened');
            cover.style.display = 'none';
            showPage(1);
            isBookOpened = true;
        }, 1200);
    }
}

function showPage(pageNum) {
    // Hide all pages
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById('page' + i);
        if (page) {
            page.classList.remove('active');
        }
    }

    // Show current page with animation
    const currentPageEl = document.getElementById('page' + pageNum);
    if (currentPageEl) {
        currentPageEl.classList.add('active', 'fade-in');

        // Recreate spiral holes after page is shown
        setTimeout(() => {
            createSpiralHoles();
            currentPageEl.classList.remove('fade-in');
        }, 100);
    }

    currentPage = pageNum;
    updateNavigation();
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

function updateNavigation() {
    const prevButtons = document.querySelectorAll('.nav-button:first-child');
    const nextButtons = document.querySelectorAll('.nav-button:last-child');

    prevButtons.forEach(btn => {
        btn.disabled = currentPage <= 1;
    });

    // Solo deshabilitar botón "Siguiente" en páginas que no sean la 12
    if (currentPage !== 12) {
        nextButtons.forEach(btn => {
            btn.disabled = currentPage >= totalPages;
        });
    }
}

// NUEVA FUNCIÓN: IR A SIGUIENTE PARTE
function goToNextPart() {
    // Efecto de transición suave
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';

    setTimeout(() => {
        window.location.href = '../Parte2/Cumpleaños.html';
    }, 500);
}

// Touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (!isBookOpened) return;

    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            nextPage();
        } else {
            // Swipe right - previous page
            previousPage();
        }
    }
}

// Prevent zoom on double tap
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle window resize to recreate holes
window.addEventListener('resize', () => {
    if (isBookOpened) {
        setTimeout(createSpiralHoles, 100);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingHearts();
    updateNavigation();
    createSpiralHoles();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!isBookOpened) {
        if (e.key === 'Enter' || e.key === ' ') {
            openBook();
        }
        return;
    }

    if (e.key === 'ArrowLeft') {
        previousPage();
    } else if (e.key === 'ArrowRight') {
        nextPage();
    }
});
