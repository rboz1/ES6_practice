//Toggles mobile hamburger menu on and off
"use strict";
let toggleMenu = () => {
    let menu = document.getElementsByClassName("toggle-on");
    let width = window.innerWidth;
  
    // if (width >= 1440){
    //   menu[0].style.display === 

    console.log(menu[0].style.display);
    if (menu[0].style.display === "" || menu[0].style.display === "none"){
      return menu[0].style.display = "flex";
        }else if(menu[0].style.display = "flex"){
         return menu[0].style.display = "none";}
  };
  

  /*Prevents desktop navbar from disappearing after mobile hamburger menu is toggled 
  and window is resized*/
  
//   let displayLargeNav = () => {
//     let width = window.innerWidth;
//     let menu = document.getElementsByClassName("toggle-menu");
  
//     if (width >= 752){
//       return menu[0].style.display = "flex";
//     }else{
//       return menu[0].style.display = "none";
//     }
//   };
  
//   window.onresize = displayLargeNav;