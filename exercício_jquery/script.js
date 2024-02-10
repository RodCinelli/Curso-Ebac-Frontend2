$(document).ready(function() {
    // Função para carregar tarefas do Local Storage
    function carregarTarefas() {
        const tarefas = JSON.parse(localStorage.getItem('tarefas'));
        if (tarefas) {
            tarefas.forEach(function(tarefa) {
                $('#task-list').append(`<li>${tarefa} <button class="delete-task-btn">Excluir</button></li>`);
            });
        }
    }

    // Função para salvar tarefas no Local Storage
    function salvarTarefas() {
        const tarefas = [];
        $('#task-list li').each(function() {
            const tarefa = $(this).text().replace('Excluir', '').trim();
            tarefas.push(tarefa);
        });
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

    // Carrega as tarefas ao iniciar
    carregarTarefas();

    $('#task-form').submit(function(e) {
        e.preventDefault();
        const taskText = $('#task-input').val();
        if (taskText) {
            const taskItem = $(`<li>${taskText} <button class="delete-task-btn">Excluir</button></li>`);
            $('#task-list').append(taskItem);
            $('#task-input').val('');
            salvarTarefas(); // Salva as tarefas após adicionar uma nova
        }
    });

    $('#task-list').on('click', 'li', function(e) {
        if (!$(e.target).hasClass('delete-task-btn')) {
            $(this).toggleClass('done');
            salvarTarefas(); // Salva as tarefas após marcar como concluída
        }
    });

    $('#task-list').on('click', '.delete-task-btn', function(e) {
        e.stopPropagation(); // Impede que o evento de clique se propague para o li
        $(this).parent().remove();
        salvarTarefas(); // Salva as tarefas após excluir
    });
});
