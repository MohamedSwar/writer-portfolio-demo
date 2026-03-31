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

function sendToWhatsApp() {
    // جلب البيانات من الحقول
    let name = document.getElementById("wa_name").value;
    let email = document.getElementById("wa_email").value;
    let subject = document.getElementById("wa_subject").value;
    let message = document.getElementById("wa_message").value;

    // اختبار لو الحقول فاضية
    if(name === "" || message === "") {
        alert("Please fill your name and message!");
        return;
    }

    // رقم تليفونك (مهم: اكتب كود الدولة بدون علامة +، مثلا مصر 20)
    let phoneNumber = "201003879479"; // حط رقمك هنا

    // تجميع الرسالة وتنسيقها
    let whatsappText = `Hello Eng. Mohamed,%0A%0AI am: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;

    // فتح رابط واتساب
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
    window.open(whatsappURL, '_blank');
}
