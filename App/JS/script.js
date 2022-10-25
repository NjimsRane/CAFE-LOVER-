const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar= document.querySelector(".nav-bar");
hamburgerMenu.addEventListener("click",function(){
    hamburgerMenu.classList.toggle("hamburger-menu-move");
    navBar.classList.toggle('nav-bar-show')
})