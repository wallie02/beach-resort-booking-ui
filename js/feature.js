// dispaly today date
let todayDate = new Date();

// get date from built in funtion using array and then for looping
var dayNumber = todayDate.getDate().toString().padStart(2,"0");
var monthNumber =  (todayDate.getMonth()+1).toString().padStart(2,"0");

// Date
const getdateID = document.querySelectorAll('.day-num');
    getdateID.forEach((x) => 
        x.innerHTML = dayNumber
    );

//Month
const getmothID = document.querySelectorAll('.month');
getmothID.forEach((x) => 
    x.innerHTML = monthNumber
);


// navbar color change
function changeNav(){
var navbg = document.getElementById('navbarBg');
var scrollValue = window.scrollY;
if(scrollValue < 550){
    navbg.classList.remove('nav-changeBg');
}else{
    navbg.classList.add('nav-changeBg');
}
}
window.addEventListener('scroll',changeNav);

// back to scroll
let scrollBtn = document.getElementById('upbutton');
function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollBtn.addEventListener('click',scrollUp);

window.addEventListener('scroll', ()=> {
    scrollBtn.classList.toggle('scroll-fadeOut', window.scrollY > 100)
})


//Swiper Slide
var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	centeredSlides: true,
	loop: true,
	slidesPerView: "2",
    grabCursor : true,
	coverflowEffect: {
		rotate: 0,
		stretch: 20,
		depth: 80,
		modifier: 5,
		slideShadows: true
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	}
});


// Scroll Reveal
ScrollReveal({ 
    reset: true,
    duration : 2500,
    delay:300,
});

ScrollReveal().reveal('.nav-main', { delay: 400, origin: 'top',distance: '20px' });
ScrollReveal().reveal('.mid-container', { delay: 500, origin:'bottom',distance: '30px' });
ScrollReveal().reveal('.about-text', { delay: 600, origin:'left',distance: '30px' });
ScrollReveal().reveal('.about-second-img-1', { delay: 700 , origin: 'left',distance: '100px'});
ScrollReveal().reveal('.about-second-img-2', { delay: 700 , origin: 'right',distance: '100px'});
ScrollReveal().reveal('.about-img', { delay: 700 , origin: 'right',distance: '50px'});
ScrollReveal().reveal('.facilities-slide-1', { delay: 800 , origin: 'left',distance: '100px'});
ScrollReveal().reveal('.main-title-facilities',{ delay:800, origin:'top',distance:'50px'});
ScrollReveal().reveal('.wedding-facilities',{ delay:800, origin:'bottom',distance:'50px'});
ScrollReveal().reveal('.room-card',{ delay:850, origin:'bottom'});
ScrollReveal().reveal('.mySwiper',{ delay:900, origin:'left',distance: '40px'});
ScrollReveal().reveal('.room-card-heading',{ delay:900, origin:'right',distance: '40px'});
ScrollReveal().reveal('.add-quotes',{ delay:980, origin:'bottom'});
ScrollReveal().reveal('.add-items-1',{ delay:1000, origin:'left',distance : '40px'});
ScrollReveal().reveal('.add-items-2',{ delay:1010, origin:'top',distance : '40px'});
ScrollReveal().reveal('.add-items-3',{ delay:1020, origin:'bottom',distance : '40px'});
ScrollReveal().reveal('.add-items-4',{ delay:1030, origin:'top',distance : '40px'});
ScrollReveal().reveal('.add-items-5',{ delay:1040, origin:'right',distance : '40px'});
ScrollReveal().reveal('.footer',{ delay:1100, origin:'bottom'});
ScrollReveal().reveal('.footer',{ delay:1100, origin:'top',distance:'20px'});
ScrollReveal().reveal('.footer-log',{ delay:1110, origin:'left',distance:'40px'});
ScrollReveal().reveal('.first-footer',{ delay:1110, origin:'left',distance:'40px'});
ScrollReveal().reveal('.second-footer',{ delay:1110, origin:'right',distance:'40px'});
ScrollReveal().reveal('.third-footer',{ delay:1110, origin:'right',distance:'40px'});

















