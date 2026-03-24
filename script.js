$(document).ready(function(){
    $(window).scroll(function()
{
    if(this.scrollY > 20) {
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }    
})
//////////////////////////////////////////
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

const swiper = new Swiper('.slider-wrapper', { 
    // Optional parameters
  loop: true,
  // If we need pagination
  pagination: { 
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, 
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    }  
  }});


});