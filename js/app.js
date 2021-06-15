/*jshint esversion: 6 */

let themeSwitch = document.querySelector('.toggle-icon');
let body = document.querySelector('body');
themeSwitch.onclick = function(){
    themeSwitch.classList.toggle('active');
    body.classList.toggle('dark');
};