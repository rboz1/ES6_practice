//splide.js event listener
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      drag: "true",
      classes: {
        arrows: 'splide__arrows',
        arrow : 'splide__arrow',
        prev  : 'splide__arrow--prev',
        next  : 'splide__arrow--next'
      },
    } );
    splide.mount();
  } );

//Toggles mobile hamburger menu on and off if window width is below 1200px
let toggleMenu = () => {
  let menu = document.getElementsByClassName("toggle-on");

  if (menu[0].style.display === "" || menu[0].style.display === "none"){
    return menu[0].style.display = "flex";
  }else if(menu[0].style.display = "flex"){
    return menu[0].style.display = "none";}
};


//Prevents desktop navbar from disappearing after mobile hamburger menu is toggled on and window is resized
  let displayLargeNav = () => {
    let width = window.innerWidth;
    let menu = document.getElementsByClassName("toggle-on");
  
    if (width >= 1200){
      return menu[0].style.display = "none";
    }
  };
  
  window.onresize = displayLargeNav;