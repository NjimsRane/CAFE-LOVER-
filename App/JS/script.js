const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar= document.querySelector(".nav-bar");
const socialMedia= document.querySelector(".social-media-links"); 

hamburgerMenu.addEventListener("click",function(){
    hamburgerMenu.classList.toggle("hamburger-menu-move");
    navBar.classList.toggle('nav-bar-show');
    socialMedia.classList.toggle('social-media-links-hide');
});



