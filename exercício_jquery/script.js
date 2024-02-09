$(document).ready(function() {
    $('#task-form').submit(function(e) {
        e.preventDefault(); // Evita o recarregamento da página
        const task = $('#task-input').val();
        if (task) {
            $('#task-list').append(`<li>${task}</li>`);
            $('#task-input').val(''); // Limpa o campo de entrada
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('done'); // Adiciona ou remove a classe 'done'
    });
});
