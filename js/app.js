// window.particleJS("particles-js", "particlejs-config.json");

// particlesJS.load('particles-js', 'particlesjs-config.json', function() {
//     console.log('callback - particles.js config loaded');
// });

// navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navSocials = document.querySelector(".nav__socials")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navSocials.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navSocials.classList.remove("active");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navSocials.classList.remove("active");
    } 
//     else {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
//     navSocials.classList.remove("active");
// }
    prevScrollpos = currentScrollPos;
}