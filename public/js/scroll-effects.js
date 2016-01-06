var tags = [];
var reload = true;

$(function(){
  window.addEventListener("scroll", onScroll);
  onScroll();
});

function onResize(){
  reload = true;
}

function load(){
    var windowHeight = $(window).height();
    var mainOffset = $("main h2").offset();
    tags.push({at: mainOffset.top, obj: function(){
      return $('main h2');
    }});
    $('.story-fragment').each(function(index,element){
      var elementOffset = $(element).offset().top + 100;
      tags.push({at: elementOffset, obj: function(){
        return $('.story-text:not(".shown")').first();
      }});
    });
    reload = false;
}

function onScroll(){
  if (reload) {
    load();
  }
  var scrollPosition = $(window).scrollTop();
  var viewport = scrollPosition + $(window).height();
  for (var i = 0; i < tags.length; i++) {
    var current = tags[i];
    if (viewport > current.at) {
      current.obj().addClass('shown');
      tags.splice(i,1);
      i--;
    }else{
      break;
    }
  }
}
