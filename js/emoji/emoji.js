$(document).ready(function(){
    
     const AMOUNT_EMOJI = 9;

   function innerEmoji(){
       let html = '';
       for(let i = 1; i <= AMOUNT_EMOJI; i++){
           html += `<img src="./images/emoji/giphy${i}.webp" class="item-emoji" alt=""> `;
       }
       return html;
   } 
   $('.emoji').html(innerEmoji);
//    $('img.item-emoji').click(function () {
//     $(this).parent().parent().find('.img img').attr('src', $(this).attr('src'));
//         $(this).parent().parent().find('.remove-icon').show();
//     });
    $('.remove-icon').click(function(){
        $(this).parent().find('img').attr('src', '');
        $(this).hide();
    });
    $('button.reply').click(function(){
        $(this).text( $(this).text() == 'Hủy' ? 'Trả lời' : 'Hủy' );
        $(this).parent().parent().parent().find('.hide .group-post-comment').toggle();
    });

    $(".example1").emojioneArea({
        standalone: false,
        pickerPosition: "bottom",
        tonesStyle: "bullet",
        search: false
    });
    $('.emoji-label').click(function(){
        parent = $(this).parent();
        let status = parent.find('.emoji').css('display');
        if(status == 'block'){
            parent.find('.emoji').hide();
        }
        else{
            parent.find('.emoji').show();
        }
    });
    $('img.item-emoji').click(function(){
        let parent = $(this).parent().parent();
        console.log(parent);
        console.log(1);
        parent.find('.emoji').hide();
        parent.find('.emojionearea-editor').append(`<img src="${$(this).attr('src')}" />`);
    });
    
});

