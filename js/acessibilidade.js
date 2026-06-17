let modoEscuroAtivo = false;

function alternarModo() {
    document.body.classList.toggle('dark-mode');
    
    const botao = document.querySelector('.accessibility-controls button');
    if (botao) {
        if (document.body.classList.contains('dark-mode')) {
            botao.innerHTML = "☀️ Modo Claro";
        } else {
            botao.innerHTML = "🌙 Modo Noturno";
        }
    }
}

function aumentarFonte() {
    document.body.classList.remove('fonte-pequena');
    document.body.classList.add('fonte-grande');
}

function diminuirFonte() {
    document.body.classList.remove('fonte-grande');
    document.body.classList.add('fonte-pequena');
}