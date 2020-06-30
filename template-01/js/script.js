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
const countNumber = document.querySelector("#count");

setInterval(counter, 60000);

function counter() {
    countNumber.textContent -= 1;
}

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
//INPUTS CHECK

const input = document.querySelectorAll(".form-box__item");
const btnForm = document.querySelector(".button-form");
const form = document.querySelector(".form-box__form");
const errors = {
    empties: "Поля не могут оставаться пустыми",
    empty: "Поле не может оставаться пустым",
};

btnForm.addEventListener("click", checkForm);

function checkForm(event) {
    event.preventDefault();
    for (let i = 0, y = input.length; i < y; i++) {
        if (input[0].value === "" && input[1].value === "") {
            let p = document.createElement("p");
            p.textContent = errors.empties;
            p.classList.add("error");
            btnForm.before(p);
            setInterval(() => {
                p.remove();
            }, 3000);
            return false;
       }
        else if (input[0].value === "" || input[1].value === "") {
            let p = document.createElement("p");
            p.textContent = errors.empty;
            p.classList.add("error");
            btnForm.before(p);
            setInterval(() => {
                p.remove();
            }, 3000);
            return false;
        }
        
        else {
            modal.style.display = "none";
            form.reset();
        }
        
    }
}