$(document).ready(function() {
    const $inputDate = $('#data-atividade');

    $('#atividade').submit(function(e){
        e.preventDefault();     

        const nomeAtividade = $('#nome-atividade').val();
        const li = $('<li></li>');
        const input = $('<input>', {type: 'checkbox', id: nomeAtividade, value: nomeAtividade});
        const label = $('<label></label>', {for: nomeAtividade, text: nomeAtividade});

        li.append(input, label);

        $('#lista-atividades').append(li);
        $('#nome-atividade').val('');
    });

    $('form input').on('focus', function(){
        $('.ul-container').slideDown('fast', function() {
            $(this).css('display', 'flex'); 
        });
    });
    
    $inputDate.on('change', function() {
        const dataSelecionada = $inputDate.val();
        $('#mensagem-data').text(`Sua rotina do dia ${dataSelecionada} é:`);
    });

    $('#botao-reset').on('click', function(){
        $('.ul-container').slideUp(1000, function(){
        });

        $('#data-atividade').val(''); 
        $('#mensagem-data').empty(); 
        $('#lista-atividades').empty();
    });

});
