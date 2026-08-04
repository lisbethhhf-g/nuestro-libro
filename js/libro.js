let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const pageCounter = document.getElementById('pageCounter');

function nextPage() {
    if (currentPage < totalPages - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
        updateCounter();
        lanzarCorazones();
    } else {
        showToast('💙 Llegamos al final de esta historia... ¡Pero esto es para siempre! 💙');
    }
}

function previousPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
        updateCounter();
        lanzarCorazones();
    } else {
        showToast('🌙 Este es el comienzo de nuestra historia...');
    }
}

function updateCounter() {
    const romanNumerals = ['i', 'ii', 'iii', 'iv', 'v'];
    pageCounter.textContent = `Página ${currentPage + 1} de ${totalPages}  •  ${romanNumerals[currentPage]}`;
}

function showToast(msg) {
    const oldToast = document.querySelector('.toast-message');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = msg;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.8s ease';
        setTimeout(() => toast.remove(), 800);
    }, 3000);
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousPage();
    }
});

// Inicializar contador
updateCounter();