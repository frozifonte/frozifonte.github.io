"use strict";

const lazyLoading = document.querySelector(".preloader");
window.addEventListener("load", function () {
    lazyLoading.style.display = "none";
});

// MENU ON SMALL DEVICES
const btnMenu = document.querySelector(".nav__toggle");
const mobMenu = document.querySelector(".nav-menu");

btnMenu.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.preventDefault();
    if (mobMenu.style.display == "block") {
        mobMenu.style.display = "none";
    }
    
    else {
        mobMenu.style.display = "block";
    }
}

// DELETES MOBILE MENU WHEN A CLIENT INCREASES HIS WINDOW OF A BROWSER
setInterval(delMobMenu, 0.1);

function delMobMenu() {
    if (document.body.clientWidth>720) {
        if (document.body.clientWidth>720) {
            mobMenu.style.display = "none";
        }
    }
}


// A TIMER
const minCounter = document.querySelector("#minutes");
const hoursCounter = document.querySelector("#hours");
const daysCounter = document.querySelector("#days");

const countMin = setInterval(counter, 60000);

function counter() {
    if (minCounter.textContent > 0) {
        minCounter.textContent -= 1;
    }
    else {
       clearInterval(countMin);
       const countHour = setInterval(function() {
           if (hoursCounter.textContent > 0) {
        hoursCounter.textContent -= 1;
        }
        else {
            clearInterval(countHour);
            const countDay = setInterval(function() {
                if (daysCounter.textContent > 0) {
                    daysCounter.textContent -= 1;
                }
                else {
                    clearInterval(countDay);
                }
            }, 3600000);
    }
       }, 86400000); 
    }
};

// MODAL WINDOW
const btnOpenModal = document.querySelectorAll(".button");
const modal = document.querySelector(".modal");

for (let i = 0, y = btnOpenModal.length; i < y; i++) {
    btnOpenModal[i].addEventListener("click", function() {
        modal.style.display = "flex";
    });
}


window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

window.addEventListener("load", function () {
   if (modal.style.display == "flex") {
       modal.style.display = "none";
   } 
});

