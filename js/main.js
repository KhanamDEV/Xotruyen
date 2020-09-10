$(document).ready(function () {

    function modalSelected() {
        $("select").click(function () {
            let select = $(this);
            let valueSelect = '';
            let nameSelect = ''
            let nameModal = $(this).attr('id') + 'Modal';
            let modal = $('#' + nameModal);
            modal.modal('show')
            $(modal).find('button').click(function () {
                $(this).parent().children('button').removeClass('active');
                $(this).addClass('active');
                valueSelect = $(this).attr('value');
                nameSelect = $(this).attr('name');
                select.find('option').attr('value', valueSelect);
                select.find('option').text(nameSelect);
                modal.modal('hide');
                redirectCate();
            });
        });
    }

    function redirectCate() {
        var inputType = $('#inputType').val();
        var inputStatus = $('#inputStatus').val();
        var inputSort = $('#inputSort').val();
        var url = domain + inputType + '/' + inputStatus + '/' + inputSort;
        window.location.href = url;
    }

    $('#categoryLoadStore').click(function () {
        var inputType = $('#inputType').val();
        var inputStatus = $('#inputStatus').val();
        var inputSort = $('#inputSort').val();
        var pageCate = $('#pageCate').val();
        var sumPage = $('#sum_page').val();

        if (parseInt(pageCate) <= parseInt(sumPage)) {
            $('#ajax-loading').show();
            var page = parseInt(pageCate) + parseInt(1);
            $.ajax({
                type: 'POST',
                url: domain + 'load-store-cate',
                data: {
                    'cate': inputType,
                    'status': inputStatus,
                    'order': inputSort,
                    'page': page,
                },
                success: function (data) {
                    $('#ajax-loading').hide();
                    if (parseInt(page) == parseInt(sumPage)) $('#categoryLoadStore').hide();
                    $('#pageCate').val(page);
                    $('#appendData').append(data);
                }
            });
        }

    });

    $("input#searchChange").keyup(function(){
        var key = $(this).val();
        if(parseInt(key.length) > 3){
            $.ajax({
                type: 'POST',
                url: domain + 'load-search',
                data: {
                    'key': $("input#searchChange").val()
                },
                success: function (data) {
                    $('#appendDataSearch').html(data);
                    $('#appendDataSearch').show();
                }
            });
        }else{
            $('#appendDataSearch').hide();
        }
    });

    function setFooter() {
        let heightHeader = $("#wrap-header").outerHeight();
        let heightFooter = $("#wrap-footer").outerHeight();
        let heightContainer = $("#main-container").outerHeight();
        let heightDevice = $(window).outerHeight();
        if (heightContainer + heightFooter + heightHeader < heightDevice) {
            $("#wrap-footer").addClass("position");
        }
        else {
            $("#wrap-footer").removeClass("position");
        }
    }
    function showMore(text) {
        let parent = text.parent();
        if(text.text().length > 130){
            parent.append('<span class="load-more">Xem thêm</span>');
        }
        parent.find('span').click(function(){
            let type = text.css('white-space');
            if(type == 'normal'){
                text.css('white-space', 'nowrap');
            }
            if(type == 'nowrap'){
                text.css('white-space', 'normal');
            }
            $(this).text($(this).text() == 'Xem thêm' ? 'Thu gọn' : 'Xem thêm');
        });
    }
    $.each($('.content-comment p'), function(index, value){
        showMore($(value));
    })
    setFooter();
    modalSelected();
    $(".nav-link").click(function () {
        setFooter();
    })
    $(window).resize(function () {
        setFooter();
    })
});