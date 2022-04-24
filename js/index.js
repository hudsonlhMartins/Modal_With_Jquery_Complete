$(document).ready(function() {
    modalCustom()
});




/*
==========================  FUNÇÕES PARA O MODAL  ==========================
*/

/*== AQUI E TODAS FUNCTION QUE TEM QUE INICAR QUANDO A TELA FOR CARREGADA ==*/
function modalCustom(){
    clickBtnOpenModal()
    closeModalCustom()
    hideModalToMascara()
    hideModalWithEsc()
}


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
    var modal = $(item)
    $(modal).addClass('visible')
}

function closeModalCustom() {
    $('.close-modal-custom').click(function(e) {
        var element = $(e).closest('.modal-custom').prevObject[0].currentTarget
        var modalAtual = $(element).closest('.modal-custom')
        modalAtual.removeClass('visible')
    })
}

function hideModalToMascara(){
    var mascara = $('#mascaraCustomModal')
    $(mascara).click(function() {
        var modalAll = $('.modal-custom.visible')
        if(modalAll.length > 0){
            var endModal = modalAll.length -1
            var modalAtual = modalAll[endModal]
            $(modalAtual).removeClass('visible')
        }
    })
}


/* 
    ESSE METADO E SO QUANDO VC PRECISA TER UM MODAL DENTRO DE OUTRO E QUERER VOLTA PARA 
    O MODAL ANTERIOR 
*/
function backPreventModal(e){
    var element = e.target
    var modalAtual = $(element).closest('.modal-custom')
    modalAtual.removeClass('visible')
}


// Fechar o modal com a tecla ESC
function hideModalWithEsc(){
    $('body').keyup(function(event) {
        if(event.which == 27){
            var allModal = $('.modal-custom.visible')
            if(allModal.length > 0){
                var endModal = allModal.length -1
                var modalAtual = allModal[endModal]
                $(modalAtual).removeClass('visible')
            }
        }
    })
}

/*
==========================  END MODAL  ==========================
*/