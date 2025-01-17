function atualizarBarraDeVida(percentual) {
    const barra = document.getElementById('vida');
    const texto = document.getElementById('texto-vida');

    
    barra.style.width = percentual + '%';

   
    texto.textContent = percentual + '%';

  
    if (percentual > 50) {
        barra.style.backgroundColor = '#4caf50'; 
    } else if (percentual > 20) {
        barra.style.backgroundColor = '#ffc107'; 
    } else {
        barra.style.backgroundColor = '#f44336'; 
    }
}


let vidaAtual = 100;
setInterval(() => {
    if (vidaAtual > 0) {
        vidaAtual -= 5; 
        atualizarBarraDeVida(vidaAtual);
    }
}, 1000); 