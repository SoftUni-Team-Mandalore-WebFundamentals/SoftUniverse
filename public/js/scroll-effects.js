var tags = [];

$(function(){
  window.addEventListener("scroll", onScroll);

  tags.push({at: 1000, active:false, obj: function(){
    return $('main h2');
  }});
  tags.push({at: 1300, active:false, obj: function(){
    return $('.story-text:not(".shown")').first();
  }});
  tags.push({at: 1800, active:false, obj: function(){
    return $('.story-text:not(".shown")').first();
  }});
  tags.push({at: 2100, active:false, obj: function(){
    return $('.story-text:not(".shown")').first();
  }});
  onScroll();
});

function onScroll(){
  var scrollPosition = $(window).scrollTop();
  var viewport = scrollPosition + $(window).height();
  for (var i = 0; i < tags.length; i++) {
    var current = tags[i];
    if (viewport > current.at && !current.active) {
      current.obj().addClass('shown');
      tags.splice(i,1);
      i--;
    }else{
      break;
    }
  }
}
