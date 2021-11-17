
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      drag: "true",
      classes: {
        arrows: 'splide__arrows your-class-arrows',
        arrow : 'splide__arrow your-class-arrow',
        prev  : 'splide__arrow--prev your-class-prev',
        next  : 'splide__arrow--next your-class-next',
      },
    } );
    splide.mount();
  } );

//Toggles mobile hamburger menu on and off
"use strict";
let toggleMenu = () => {
    let menu = document.getElementsByClassName("toggle-on");

    if (menu[0].style.display === "" || menu[0].style.display === "none"){
      return menu[0].style.display = "flex";
        }else if(menu[0].style.display = "flex"){
         return menu[0].style.display = "none";}
  };