let nav = document.querySelector(".navbar");
let searchToggler = document.querySelector(".search-toggler");
let favorites = document.querySelector(".favorites");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 150) {
        nav.classList.add("scroll-on");
        searchToggler.classList.add("scroll-on");
        favorites.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
        searchToggler.classList.remove("scroll-on");
        favorites.classList.remove("scroll-on");
    }
}