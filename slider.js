// const slide = () => {
//     let btnNext = document.getElementsByClassName("splide__arrow--next")[0];
//     btnNext.addEventListener("click", handleClickNext=()=>{
//         document.getElementsByTagName("header")[0].style.backgroundImage = "url(images/mobile/mobile-image-hero-2.jpg)";
//     });
// }


const slide = () => {
    const imageArr = [1,2,3]
    for(i = 0; i < imageArr.length; i++){
        let btnNext = document.getElementsByClassName("splide__arrow--next")[0];
        btnNext.addEventListener("click", handleClickNext=()=>{
            console.log(imageArr[i]);
            console.log(document.getElementsByTagName("header")[0].style.backgroundImage = "url(images/mobile/mobile-image-hero-"+i+".jpg)");
        });
    }

}