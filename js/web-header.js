var header = document.getElementById('header');
var logo = document.getElementById('logo');
var headermain = document.getElementById('header-main');
var yPos;
function runOnScroll(){
  yPos = window.pageYOffset;
  if (yPos>150) {
    header.style.paddingTop = "5px";
    header.style.paddingBottom = "0px";
    logo.style.width="320px";
    headermain.style.borderBottom = "0px solid silver";
    header.style.background = "#353d40";
  }else {
    header.style.paddingTop = "20px";
    header.style.paddingBottom = "20px";
    header.style.background = "none";
    logo.style.width="420px";
    headermain.style.borderBottom = "1px solid silver";
  }
}
window.addEventListener("scroll", runOnScroll);
