$(document).ready(function() {
    clickBtnOpenModal()
    closeModalCustom()
    hideModalToMascara()
});



function clickBtnOpenModal() {
    var btns_open = $('[data-open-modal]')
    $(btns_open).each(function() {
        $(this).click(function() {
            var modalCustom = $(this).attr('data-open-modal')
            openModalCustom(modalCustom)
        })
    })
}

/*==  ESSA FUNCTION NÃO PRECISA INICIAR QUANDO A PAGINA FOR CARREGADA ==*/
function openModalCustom(item){
    let modal = $(item)
    $(modal).addClass('visible')
}

function closeModalCustom() {
    $('.close-modal-custom').click(function(e) {
        let modal = $(e.target).parent().parent()
        $(modal).removeClass('visible')
    })
}

function hideModalToMascara(){
    var mascara = $('#mascaraCustomModal')
    $(mascara).click(function() {
        let modalAtual = $('.modal-custom.visible')
        $(modalAtual).removeClass('visible')

    })
}