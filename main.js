$(document).ready(function () {
    /* pega o input e adciona como uma tarefa */
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const adicionaTarefa = $('<li></li>').text(novaTarefa);
        adicionaTarefa.appendTo('ul');
        $('#nova-tarefa').val('');
    });

    $(document).on('click', 'li', function () {
        $(this).toggleClass("marked");
    });
});
