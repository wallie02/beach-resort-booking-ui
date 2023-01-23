// login button
    function login(){
        location.href="login.html"; 
    }

//contact popup
    function contactOpen(){
        document.getElementById('pop-up-text').style.display="block";
    }
    
    function contactClose(){
        document.getElementById('pop-up-text').style.display="none";
    }

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

//  scroll up button
let scrollBtn = document.getElementById('upbutton');
function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollBtn.addEventListener('click',scrollUp);


// scrolling
let observeTarget = new IntersectionObserver((element) => {
    element.forEach((e) => {
        console.log(e);
        if(e.isIntersecting){
            e.target.classList.add('scrollshow');
        }else{
            e.target.classList.remove('scrollshow');
        }
    });
});

let  scrollElements = document.querySelectorAll('.scrollhidden, .main-scrollhidden, .promo-scrollhidden');
scrollElements.forEach((x) => observeTarget.observe(x));