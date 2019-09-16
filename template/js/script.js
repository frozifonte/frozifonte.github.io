$(document).ready(function() {
    $('.about-bottom').magnificPopup({
 delegate: 'a',
        type: 'image',
        gallery: {
           enabled: true,
        },
        zoom: {
         enabled: true,
         duration: 300
 }
 });
    
    
    $('.gallery').magnificPopup({
 delegate: 'a',
        type: 'image',
        gallery: {
           enabled: true,
        },
        zoom: {
         enabled: true,
         duration: 300
 }
 });
    
});