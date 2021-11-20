
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      drag: "true",
      classes: {
        arrows: 'splide__arrows angles-arrows',
        arrow : 'splide__arrow angles-arrow',
        prev  : 'splide__arrow--prev angles-prev',
        next  : 'splide__arrow--next angles-next',
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