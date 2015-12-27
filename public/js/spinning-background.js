document.addEventListener("DOMContentLoaded", function(){
var x = 0;
setInterval(function(){
      x-=1;
      $('.banner').css('background-position', x + 'px 0');
    }, 10);
});
