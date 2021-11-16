
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
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