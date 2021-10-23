//Scroll to top selection
const scrollUp = document.querySelector('#scroll-up');

//scroll to up functionality
scrollUp.addEventListener('click',() => {
    window.scrollTo({
        top : 0,
        left : 0,
        behavior : "smooth",
    });
});

//nav hamburgerburger selections
const burger = document.querySelector('#burger-menu');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

//hamburger menu function
burger.addEventListener('click',() => {
    ul.classList.toggle("show");
});

//select nav links
const navLink = document.querySelector('.nav-link');

//close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);