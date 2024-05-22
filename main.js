$(document).ready(function () {
    $('#cep').mask('00000-000');

    $('#btn-buscar-cep').click(async function () {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        const botao = $(this);
        $(botao).find('i').addClass('d-none');
        $(botao).find('span').removeClass('d-none');

        try {
            const resposta = await fetch(endpoint);
            if (!resposta.ok) {
                throw new Error('Erro na requisição');
            }
            const json = await resposta.json();
            const logradouro = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const endereco = `${logradouro}, ${bairro}, ${cidade} - ${estado}`;
            $('#endereco').val(endereco);
        } catch (erro) {
            alert("Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.");
        } finally {
            setTimeout(function () {
                $(botao).find('i').removeClass('d-none');
                $(botao).find('span').addClass('d-none');
            }, 1000);
        }
    });

    $('#formulario-pedido').submit(function (evento) {
        evento.preventDefault();

        let valid = true;
        let errorMessage = '';

        if ($('#nome').val().length == 0) {
            valid = false;
            errorMessage += 'Digite o nome.\n';
        }

        if ($('#cep').val().length != 9) {
            valid = false;
            errorMessage += 'Digite um CEP válido.\n';
        }

        if (!validateEmail($('#email').val())) {
            valid = false;
            errorMessage += 'Digite um e-mail válido.\n';
        }

        if (!valid) {
            alert(errorMessage);
            return;
        }

        // Mostrar mensagem de sucesso
        $('#success-message').removeClass('d-none');

        // Se tudo estiver válido, prosseguir com a submissão (remova este comentário se precisar de submissão real)
        // this.submit();
    });

    // Função para limpar os campos do formulário
    $('#btn-limpar').click(function () {
        $('#formulario-pedido')[0].reset();
        $('#success-message').addClass('d-none');
    });

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(String(email).toLowerCase());
    }
});