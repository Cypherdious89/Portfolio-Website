/*jshint esversion: 6 */

//DARK MODE TOGGLE
let themeSwitch = document.querySelector('.toggle-icon');
let body = document.querySelector('body');
themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
};

//MOBILE-NAV AUTO CLOSE
let navlinks = document.getElementsByClassName('navigation__link');

function check(){
    console.log("link clicked");
    document.getElementById("nav-toggle").checked = false;
}
for (let i = 0 ; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", check);
}

//PRE-LOADER
window.addEventListener('load', ()=>{
    const preload = document.querySelector('.preload');
    setTimeout(() => {
        preload.classList.add("preload__finish");
    }, 1500);
});

//SCROLL REVEAL
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for(let i = 0; i<reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint)
            reveals[i].classList.add('active');
        else
           reveals[i].classList.remove('active'); 
    }
}