//Navegation Menu
const menu = document.querySelector('.menu');
const logo = document.querySelector('#menu .logobox .logo > a');
let menuNav = document.querySelectorAll('.list-container .lists li a');

function menuLinkScrollChangeColor () {
    menuNav.forEach((links) => {
        links.style.color = "#252a34";
      });
}

function menuLinkScrollChangeColorHeader () {
    menuNav.forEach((links) => {
        links.style.color = "#fff";
      });
}


// Scroll Efect

window.onscroll = () => {
    let scrollMenu = window.pageYOffset;
  
    if (scrollMenu >= 600) {
      menu.style.background = "#fff";
      menu.style.borderBottom = "3px solid #fc9d9d"
      logo.style.color = "#252a34";
      
      menuLinkScrollChangeColor();
  
    }else{
        menu.style.background = "none";
        menu.style.borderBottom = "none"
        logo.style.color = "#fff";

        menuLinkScrollChangeColorHeader();
    }

}

