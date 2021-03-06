jQuery(document).ready(function ($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400 });

    /* ======= Fixed header when scrolled ======= */

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('navbar-fixed-top');
        }
        else {
            $('#header').removeClass('navbar-fixed-top');
        }
    });

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, { offset: -70, 'axis': 'y', easing: 'easeOutQuad' });
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').removeClass('show');
        }

    });

});

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$('#myModalProjeto').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) //Button that triggered the modal
    var id = button.data('id')
    var nome = button.data('nome') //Extract info from data-* attributes
    var descricao = button.data('descricao') //Extract info from data-* attributes
    var dtVencimento = button.data('vencimento') //Extract info from data-* attributes
    var usuario = button.data('usuario')


    //If necessary, you could initiate an AJAX request here(and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    if (id != null) {
        modal.find('.modal-title').text('Editar ' + nome)
    }
    modal.find('.modal-body input#id').val(id)
    modal.find('.modal-body input#usuario').val(usuario)
    modal.find('.modal-body input#nome').val(nome)
    modal.find('.modal-body input#data_vencimento').val(dtVencimento)
    modal.find('.modal-body textarea').val(descricao)

})

$('#myModalTarefa').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) //Button that triggered the modal
    var id = button.data('id')
    var nome = button.data('nome') //Extract info from data-* attributes
    var descricao = button.data('descricao') //Extract info from data-* attributes
    var dtVencimento = button.data('vencimento') //Extract info from data-* attributes

    //If necessary, you could initiate an AJAX request here(and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    if (id != null) {
        modal.find('.modal-title').text('Editar ' + nome)
    }
    modal.find('.modal-body input#id').val(id)
    modal.find('.modal-body input#nome').val(nome)
    modal.find('.modal-body input#data_vencimento').val(dtVencimento)
    modal.find('.modal-body textarea').val(descricao)
})

// modal

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$('#myModalTarefa').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) //Button that triggered the modal
    var id = button.data('id')
    var nome = button.data('nome') //Extract info from data-* attributes
    var descricao = button.data('descricao') //Extract info from data-* attributes
    var dtVencimento = button.data('vencimento') //Extract info from data-* attributes

    //If necessary, you could initiate an AJAX request here(and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    if (id != null) {
        modal.find('.modal-title').text('Editar ' + nome)
    }
    modal.find('.modal-body input#id').val(id)
    modal.find('.modal-body input#nome').val(nome)
    modal.find('.modal-body input#data_vencimento').val(dtVencimento)
    modal.find('.modal-body textarea').val(descricao)
})

$('#myModalProjeto').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) //Button that triggered the modal
    var id = button.data('id')
    var nome = button.data('nome') //Extract info from data-* attributes
    var descricao = button.data('descricao') //Extract info from data-* attributes
    var dtVencimento = button.data('vencimento') //Extract info from data-* attributes
    var idUsuario = button.data('usuario')

    //If necessary, you could initiate an AJAX request here(and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    if (id != null) {
        modal.find('.modal-title').text('Editar ' + nome)
    }
    modal.find('.modal-body input#id').val(id)
    modal.find('.modal-body input#nome').val(nome)
    modal.find('.modal-body input#data_vencimento').val(dtVencimento)
    modal.find('.modal-body textarea').val(descricao)
    modal.find('.modal-body input#usuario').val(idUsuario)

});

$('#myModalPergunta').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var id = button.data('id') // Extract info from data-* attributes
    var idUsuario = button.data('usuario')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    
    var modal = $(this)
    modal.find('.modal-body input#id').val(id);
    modal.find('.modal-body input#usuario').val(idUsuario);
});

$('a[data-target="#myAlertaTarefa"]').on('click', function (event) {
    event.preventDefault();
    var id = $(this).data('id');
    $('.delete').attr('href', '/excluirTarefa?id=' + id);
    $('#myAlertaTarefa').modal('show');
    
        //If necessary, you could initiate an AJAX request here(and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.

        
    // $('#excluirTarefa').attr('href', '/tarefa/excluir?id=' + id)

});

	// Adicionando dados para os modals
    $('a[data-target="#myAlertaDeleteProjeto"]').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        $('.btn btn-danger delete').attr('href', '/projeto/excluirProjeto?id=' + id);
        $('#myAlertaDeleteProjeto').modal('show');
    });
    $('a[data-target="#myAlertaConcluirProjeto"]').on('click', function (event) {
        event.preventDefault();
        var id = $(this).data('id');
        $('.ok').attr('href', '/projeto/concluir?id=' + id);
        $('#myAlertaConcluirProjeto').modal('show');
    });






