let nav = document.querySelector(".navbar");
let searchToggler = document.querySelector(".search-toggler");
let favorites = document.querySelector(".favorites");
let searchBar = document.querySelector(".search-toggle-open");

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const popupMenu = document.querySelector(".popup-mobilemenu");



window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        nav.classList.add("scroll-on");
        mobNav.classList.add("scroll-on");
        searchToggler.classList.add("scroll-on");
        favorites.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
        mobNav.classList.remove("scroll-on");
        searchToggler.classList.remove("scroll-on");
        favorites.classList.remove("scroll-on");
    }
}

//Navbar Hamburger Menu

if (bar) {
    bar.addEventListener('click', () => {
        popupMenu.classList.add("menu-open");
        // mobileNavbar.classList.add('activeHamburger');
        // mobNav.style.backgroundColor = "#212428";
        // bar.style.display = "none";
        // close.style.display = "block";
    })
}

if (close) {
    close.addEventListener('click', () => {
        popupMenu.classList.remove("menu-open");
    })
}

// searchToggler.addEventListener('click', () => {
//     if (searchToggler) {
//         searchBar.classList.add("visible");
//     }
//     else{
//         searchBar.classList.remove("visible");
//     }
// })
