'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Navbar toggle button for small screen
const NavbarToggleBtn = document.querySelector('.navbar__toggle-button');
NavbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
})

//functions
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const ContactMeBtn = document.querySelector('.home__contact')
ContactMeBtn.addEventListener('click',() => {
    scrollIntoView('#contact');
})

// Handle scrolling then fade-out home
const fadeoutHome = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    fadeoutHome.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show arrow-up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click on "arrow-up" button
arrowUp.addEventListener('click',() => {
    scrollIntoView('#home');
})