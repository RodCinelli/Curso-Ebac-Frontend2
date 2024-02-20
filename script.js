$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    // Configuração do evento submit do formulário
    document.getElementById('formularioCadastro').addEventListener('submit', function(e) {
        e.preventDefault();

        // Capturando os dados do formulário
        var usuario = {
            id: new Date().getTime(), // Adicionando um ID único para cada usuário
            nomeCompleto: document.getElementById('nomeCompleto').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cpf: document.getElementById('cpf').value,
            enderecoCompleto: document.getElementById('enderecoCompleto').value,
            cep: document.getElementById('cep').value
        };

        // Recuperando os usuários cadastrados do Local Storage ou iniciando uma lista vazia
        var usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
        usuariosCadastrados.push(usuario);

        // Salvando a lista atualizada no Local Storage
        localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));

        // Atualizando a lista de usuários na página
        atualizarListaUsuarios();
    });

    // Configuração do evento click do botão de limpeza
    document.getElementById('btnLimpar').addEventListener('click', function() {
        document.getElementById('formularioCadastro').reset();
    });
});

function atualizarListaUsuarios() {
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
    var usersList = document.getElementById('users-list');
    usersList.innerHTML = ''; // Limpa a lista atual

    usuariosCadastrados.forEach(function(usuario) {
        var div = document.createElement('div');
        div.innerHTML = `Nome: ${usuario.nomeCompleto} <br> Email: ${usuario.email} <br> Telefone: ${usuario.telefone} <br> CPF: ${usuario.cpf} <br> Endereço: ${usuario.enderecoCompleto} <br> CEP: ${usuario.cep} <span class="delete-icon" onclick="deletarUsuario(${usuario.id})"><i class="fas fa-trash"></i></span>`;
        div.style.marginBottom = '20px';
        div.setAttribute('id', `usuario-${usuario.id}`);
        usersList.appendChild(div);
    });
}

function deletarUsuario(usuarioId) {
    var usuariosCadastrados = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];
    var usuariosAtualizados = usuariosCadastrados.filter(function(usuario) {
        return usuario.id !== usuarioId;
    });

    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosAtualizados));
    atualizarListaUsuarios();
}

// Atualizando a lista ao carregar a página para mostrar usuários já cadastrados
document.addEventListener('DOMContentLoaded', atualizarListaUsuarios);
