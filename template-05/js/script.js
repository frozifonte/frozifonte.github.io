"use strict";
const navMenu = document.querySelector(".nav__items"),
      navBtn = document.querySelector(".nav-toggle");

navBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("active");
    navBtn.classList.toggle("active");
}

setInterval(delMobMenu, 0.1);

function delMobMenu() {
    if (document.body.clientWidth>910) {
        if(navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            navBtn.classList.remove("active");
        }
    }
}

