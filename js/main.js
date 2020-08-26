$(document).ready(function(){

    function modalSelected(){
        $("select").click(function () {
            let select = $(this);
            let valueSelect = '';
            let nameModal = $(this).attr('id') + 'Modal';
            let modal = $('#' + nameModal);
            modal.modal('show')
            $(modal).find('button').click(function(){
                valueSelect = $(this).attr('value');
                select.find('option').attr('value', valueSelect);
                select.find('option').text(valueSelect);
                modal.modal('hide');
            });
        });
    }

    function setFooter(){
        let heightHeader = $("#wrap-header").outerHeight();
        let heightFooter = $("#wrap-footer").outerHeight();
        let heightContainer = $("#main-container").outerHeight();
        let heightDevice = $(window).outerHeight();
        if(heightContainer + heightFooter + heightHeader < heightDevice){
            $("#wrap-footer").addClass("position");
        }
        else{
            $("#wrap-footer").removeClass("position");
        }
    }
    setFooter();
    modalSelected();
    $(".nav-link").click(function(){
        setFooter();
    })
    $(window).resize(function(){
        setFooter();
    })
});