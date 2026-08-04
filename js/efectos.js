// Estilos para el toast (se inyecta con JS)
const styleToast = document.createElement('style');
styleToast.innerHTML = `
    .toast-message {
        position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(20px);
        color: #1a3a5c; padding: 18px 40px; border-radius: 60px;
        font-family: 'Lato', sans-serif; font-weight: 300;
        border: 1px solid rgba(255, 255, 255, 0.9);
        box-shadow: 0 15px 40px rgba(42, 75, 124, 0.15);
        z-index: 1000; animation: toastIn 0.6s ease;
    }
    @keyframes toastIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px) scale(0.95); }
        to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
    }
`;
document.head.appendChild(styleToast);

// Estilos para los corazones
const styleHearts = document.createElement('style');
styleHearts.innerHTML = `
    .floating-hearts { position: fixed; pointer-events: none; z-index: 999; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
    .floating-heart { position: absolute; animation: floatHeart 8s ease-in infinite; opacity: 0; font-size: 20px; }
    @keyframes floatHeart {
        0% { opacity: 0; transform: translateY(100vh) scale(0.5) rotate(0deg); }
        10% { opacity: 0.8; }
        90% { opacity: 0.8; }
        100% { opacity: 0; transform: translateY(-10vh) scale(1.5) rotate(720deg); }
    }
`;
document.head.appendChild(styleHearts);

// Función para lanzar los corazones
function lanzarCorazones() {
    const container = document.createElement('div');
    container.className = 'floating-hearts';
    
    const symbols = ['♥', '♡', '❤', '✦', '✧', '🌙'];
    const colors = ['rgba(255,255,255,0.8)', 'rgba(200,225,255,0.9)', 'rgba(255,255,255,0.6)'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        heart.style.cssText = `
            left: ${Math.random() * 100}%;
            font-size: ${14 + Math.random() * 20}px;
            animation-duration: ${8 + Math.random() * 6}s;
            animation-delay: ${Math.random() * 4}s;
            color: ${colors[Math.floor(Math.random() * colors.length)]};
        `;
        container.appendChild(heart);
    }
    
    document.body.appendChild(container);
    setTimeout(() => { container.remove(); }, 10000);
}