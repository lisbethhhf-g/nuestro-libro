// Función para abrir el libro desde la portada (Redirección)
function abrirLibro() {
    // Crea un efecto de transición
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        window.location.href = "libro.html";
    }, 800);
}

// Función para el botón "Aún no" (Juguetón)
function noAbrirLibro() {
    const noBtn = document.getElementById('noBtn');
    
    // El botón se mueve aleatoriamente y cambia el texto
    noBtn.style.transform = "translateX(" + (Math.random() * 100 - 50) + "px) translateY(" + (Math.random() * 20 - 10) + "px)";
    noBtn.style.backgroundColor = "rgba(255, 180, 180, 0.8)";
    noBtn.style.borderColor = "#ff9999";
    noBtn.textContent = "¡No te vayas! 🥺";
    
    setTimeout(() => {
        noBtn.style.transform = "translateX(0) translateY(0)";
        noBtn.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
        noBtn.style.borderColor = "rgba(255, 255, 255, 0.8)";
        noBtn.textContent = "Aún no 🥺";
    }, 1500);
}