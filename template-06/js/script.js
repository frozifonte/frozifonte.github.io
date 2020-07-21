$(document).ready(function(){
 $(".reviews__items").slick();
    
// fixed menu and its check
   let header = document.querySelector(".header__inner"),
       headerHeight = $(".header__inner").innerHeight(),
       scrolling = $(window).scrollTop(),
       nav = document.querySelector("nav"),
       navBtn = document.querySelector('.nav-toggle');
    
    checkScroll(scrolling);
    
   $(window).on("scroll", function() {
       scrolling = $(this).scrollTop();
       checkScroll(scrolling);
   });
    
    function checkScroll(scrolling) {
       if (scrolling >= headerHeight) {
           header.classList.add('fixed');
       }
       else {
           header.classList.remove('fixed');
       }
    }
    // menu
    navBtn.addEventListener("click", function() {
        if (nav.classList.contains("active")) {
                this.classList.remove("active");
                nav.classList.remove("active");
            }
        else {
            this.classList.add("active");
            nav.classList.add("active");
        }
        
        
    });

    // check menu on wide screens
setInterval(function() {
    if (document.body.clientWidth >= 800) {
        if(nav.classList.contains("active")) {
            nav.classList.remove("active")
            navBtn.classList.remove("active");
        }
    }
}, .1);
});


// smooth scroll 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let $this = $(this),
            blockId = $this.data("scroll"),
            blockOffSet = $(blockId).offset().top;
        
        $("nav a").removeClass("active");
        $this.addClass("active");
        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500);
    });

// collapse 
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this),
            blockId = $this.data("collapse");
        $this.toggleClass("active");
    });










