var header = document.getElementById('header');
var logo = document.getElementById('logo');
var headermain = document.getElementById('header-main');
var navi = document.getElementById('menu');
var yPos;
var xWide;
var isExpand = false;

jQuery(function () {
    $('.tooltip').tooltipster();
    $('#nav-btn').click(function () {
        $( "#menu" ).slideToggle("fast");
        var w = window.innerWidth;
        var header = document.getElementById('header');
        header.style.background = "#353d40";
        if (isExpand == false) {
          isExpand = true;
        }else{
          isExpand = false;
        }
    });
});

function runOnScroll(){
  yPos = window.pageYOffset;
  var w = window.innerWidth;
  if (yPos>80) {
    header.style.paddingTop = "5px";
    header.style.paddingBottom = "5px";
    headermain.style.borderBottom = "0px solid silver";
    header.style.background = "#353d40";
    navi.style.marginTop = "20px";
    if (isExpand == true && w<=1080) {
      $( "#menu" ).slideToggle("fast");
      isExpand = false;
    }
  }else {
    header.style.paddingTop = "20px";
    header.style.paddingBottom = "20px";
    header.style.background = "none";
    headermain.style.borderBottom = "1px solid silver";
    navi.style.marginTop = "20px";
    if (isExpand == true ) {
      $( "#menu" ).slideToggle("fast");
      isExpand = false;
    }
  }
  console.log(isExpand);
}
$(window).resize(function() {
  var w = window.innerWidth;
  if (w>=1080) {
      document.getElementById("menu").style.display = "block";
      isExpand = false;
      logo.style.width="320px";
  }
  if (w<=1080) {
    document.getElementById("menu").style.display = "none";
    isExpand = false;
    logo.style.width="250px";
  }
});
window.addEventListener("scroll", runOnScroll);
