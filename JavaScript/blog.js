let modoEscuroAtivo = false;

function alternarModo() {
    const corpo = document.body;
    const barraLateral = document.querySelector('.sidebar');
    const cartoes = document.querySelectorAll('.card, .right-sidebar, .about-header, .contact-header');
    const links = document.querySelectorAll('.nav-link');
    const itensReceita = document.querySelectorAll('.recipe-item');
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    const botao = document.querySelector('.accessibility-controls button');

    if (modoEscuroAtivo === false) {
        corpo.style.backgroundColor = "#231E20";
        corpo.style.color = "#FCEFF2";
        if (barraLateral) barraLateral.style.backgroundColor = "#1A1617";
        if (botao) botao.innerHTML = "☀️ Modo Claro";
        
        cartoes.forEach(card => card.style.backgroundColor = "#2D2527");
        links.forEach(link => link.style.color = "#FCEFF2");
        itensReceita.forEach(item => item.style.backgroundColor = "#1A1617");
        inputs.forEach(input => {
            input.style.backgroundColor = "#2D2527";
            input.style.color = "#FCEFF2";
        });

        modoEscuroAtivo = true;
    } else {
        corpo.style.backgroundColor = "";
        corpo.style.color = "";
        if (barraLateral) barraLateral.style.backgroundColor = "";
        if (botao) botao.innerHTML = "🌙 Modo Noturno";
        
        cartoes.forEach(card => card.style.backgroundColor = "");
        links.forEach(link => link.style.color = "");
        itensReceita.forEach(item => item.style.backgroundColor = "");
        inputs.forEach(input => {
            input.style.backgroundColor = "";
            input.style.color = "";
        });

        modoEscuroAtivo = false;
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


document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".contact-form");
    
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); 
            
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            alert(`Obrigada pelo contato, ${nome}! ✨\nSua mensagem foi enviada com sucesso. Responderei em breve no e-mail: ${email} *PÁGINA EM CONSTRUÇÂO`);
            
            formulario.reset();
        });
    }
});
