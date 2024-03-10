document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuFormulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Aqui, você poderia adicionar validações adicionais para o formulário, se necessário.

        // Exibe a mensagem de sucesso
        alert("Formulário enviado com sucesso!");

        // Limpa o formulário após o envio
        formulario.reset();
    });
});
