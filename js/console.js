$(function () {
    $.fn.setCursorAtEnd = function(){
      var content = this.val();
      console.log(content);
      this.val('').val(content);
    };

    var cursor;
    var input = $('input');
    var cmdSpan = $('#cmd span');
    cmdSpan.text(input.val());

    input.focus(function(){
      cursor = window.setInterval(function () {
          if ($('#cursor').css('visibility') === 'visible') {
              $('#cursor').css({
                  visibility: 'hidden'
              });
          } else {
              $('#cursor').css({
                  visibility: 'visible'
              });
          }
      }, 500);
    });

    input.setCursorAtEnd();
    input.focus();

    input.keyup(function () {
        cmdSpan.text($(this).val());
    });

    input.blur(function () {
        clearInterval(cursor);
        $('#cursor').css({
            visibility: 'visible'
        });
    });

    $('.r2-console').click(function(){
      input.setCursorAtEnd();
      input.focus();
    });
});
