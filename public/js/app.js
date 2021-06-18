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
    document.getElementById("nav-toggle").checked = false;
}
for (let i = 0 ; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", check);
}

//PRE-LOADER
// window.addEventListener('load', ()=>{
//     const preload = document.querySelector('.preload');
//     setTimeout(() => {
//         preload.classList.add("preload__finish");
//     }, 1500);
// });

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

//SCROLL SLIDE
window.addEventListener('scroll', slide);

function slide() {
    const slide = document.querySelectorAll('.slide');
    for(let i = 0; i<slide.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = slide[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if(revealTop < windowHeight - revealPoint)
            slide[i].classList.add('active');
        else
            slide[i].classList.remove('active'); 
    }
}

//CONTACT FORM
const contactForm = document.querySelector('.form');
let username = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log('Submit clicked');
    
    let formData = {
        name: username.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('EMAIL SENT !');
            username.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }
        else{
            alert('SOMETHING WENT WRONG !');
        }
    };
    xhr.send(JSON.stringify(formData));
});