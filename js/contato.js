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