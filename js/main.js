$(document).ready(function(){
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
    $(".nav-link").click(function(){
        setFooter();
    })
    $(window).resize(function(){
        setFooter();
        setWidth();
    })
});