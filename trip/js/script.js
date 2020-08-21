"use strict";
// video constrols

const video = document.querySelector(".videoTrack"),
      videoControl = document.querySelector(".header__play"),
      videoWrapper = document.querySelector(".header__control");
video.addEventListener("click", playPause);
videoControl.addEventListener("click", playPause);
function playPause() {
    
    if(video.paused) {
       video.play();
       videoWrapper.classList.remove("paused");
       videoControl.style.background = "url('img/pause.svg')";
       
    }
    else{
        video.pause();
        videoWrapper.classList.add("paused");
        videoControl.style.background = "url('img/play.svg')";
    }
}

const videoTwo = document.querySelector(".videoTrack--two"),
      videoControlTwo = document.querySelector(".header__play--two"),
      videoWrapperTwo = document.querySelector(".header__control--two");
videoTwo.addEventListener("click", playPauseTwo);
videoControlTwo.addEventListener("click", playPauseTwo);
function playPauseTwo() {
    
    if(videoTwo.paused) {
       videoTwo.play();
       videoWrapperTwo.classList.remove("paused");
       videoControlTwo.style.backgroundImage = "url('img/pause.svg')";
    }
    else{
        videoTwo.pause();
        videoWrapperTwo.classList.add("paused");
        videoControlTwo.style.backgroundImage = "url('img/play.svg')";
    }
}

const playBtn = document.querySelector(".statistics__play"),
      videoWrapperBox = document.querySelector(".video-about"),
      videoTrackThree = document.querySelector(".videoTrackThree");
playBtn.addEventListener("click", function(e) {
    e.preventDefault();
    navMenu.classList.remove("fixed");
    videoWrapperBox.style.display = 'block';
    document.body.style.overflowY = "hidden";
    scrollTop.style.opacity = "0";
    videoTrackThree.play();
});
videoWrapperBox.addEventListener("click", function() {
    videoWrapperBox.style.display = 'none';
    navMenu.classList.add("fixed");
    videoTrackThree.pause();
    document.body.style.overflowY = "scroll";
    scrollTop.style.opacity = "1";
});


// menu

const buttonMenu = document.querySelector(".nav__menu"),
      menu = document.querySelector(".nav__items"),
      menuAddit = document.querySelector(".nav__items--addition");

buttonMenu.addEventListener("click", function() {
    if (menu.classList.contains("active") && menuAddit.classList.contains("active")) {
        menu.classList.remove("active");
        menuAddit.classList.remove("active");
        
    }
    else {
        menu.classList.add("active");
        menuAddit.classList.add("active");
    }
});

// fixed nav 
const navMenu = document.querySelector(".nav");
window.addEventListener("scroll", function() {
    if(pageYOffset > 80) {
        navMenu.classList.add("fixed");
    }
    else if (pageYOffset < 80) {
        navMenu.classList.remove("fixed");
    } 
});

// show scroll to top 
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", function() {
   if (pageYOffset > 660) {
       scrollTop.style.opacity = "1";
   }
    else if (pageYOffset < 660) {
       scrollTop.style.opacity = "0";
   }
});
// smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// input

$(".info__input").mask("+7 (999) 999-99-99");
