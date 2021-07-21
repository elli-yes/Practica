(function () {
  "use strict";
  function scroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      document.getElementsByClassName("nav")[0].classList.add("active");
    }
    if (scrolled < coords) {
      document.getElementsByClassName("nav")[0].classList.remove("active");
    }
  }
  function nav() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(nav, 10);
    }
  }
  document.getElementsByClassName("nav")[0].addEventListener("click", nav);
  window.addEventListener("scroll", scroll);
})();

function image(src) {
  document.body.insertAdjacentHTML(
    "afterend",
    `
  <div class="imageViewer" onclick="remove()">
    <div class="close" >
      <div class="cross" onclick="remove()"></div>
    </div>
    <div class="imag">
      <img src="${src}" alt="logo"/>
    </div>
  </div>  
  `
  );
}
function remove() {
  document.getElementsByClassName("imageViewer")[0].remove();
}
