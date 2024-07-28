const container = document.getElementById('container');
let currentBackgroundColor = getComputedStyle(container).getPropertyValue('--background-color') || 'hsl(36, 74%, 71%)'; // Cor inicial do fundo

container.addEventListener('mousemove', (event) => {
    const xPosition = (event.clientX / window.innerWidth) * 100; // Calcula a posição do mouse em relação à largura da janela
    const backgroundColor = `hsl(36, 77%, ${69 + xPosition / 8}%)`; // Cria uma cor com base na posição do mouse
    container.style.setProperty('--background-color', backgroundColor); // Atualiza a variável CSS com a nova cor
    currentBackgroundColor = backgroundColor; // Atualiza a variável com a cor atual
});

window.addEventListener('mouseout', (event) => {
    if (event.relatedTarget === null) {
        container.style.transition = 'background-color 1s ease'; // Transição suave ao entrar
    }
});