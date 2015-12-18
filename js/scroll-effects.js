var tags = [];

$(function(){
  window.addEventListener("scroll", onScroll);


  tags.push({at: 970, active:false, obj: function(){
    return $('main h2');
  }});
  tags.push({at: 1100, active:false, obj: function(){
    return $('.story-text:not(".shown")').first();
  }});
  tags.push({at: 1500, active:false, obj: function(){
    return $('.story-text:not(".shown")').first();
  }});
  tags.push({at: 1800, active:false, obj: function(){
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



  // if (viewport > 970 && !tags["header"]) {
  //   $('main h2').addClass('shown');
  //   tags["header"] = true
  // }
  // if (viewport > 1100 && !tags["p1"]) {
  //   $('.story-text:not(".shown")').first().addClass('shown');
  //   tags["p1"] = true
  // }
  //
  // if (viewport > 1500 && !tags["p2"]) {
  //   $('.story-text:not(".shown")').first().addClass('shown');
  //   tags["p2"] = true
  // }
  //
  // if (viewport > 1800 && !tags["p3"]) {
  //   $('.story-text:not(".shown")').first().addClass('shown');
  //   tags["p3"] = true
  // }

}
