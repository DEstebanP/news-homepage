const navBar = document.querySelector('.navbar');
const burgerIcon = document.querySelector('.logo-burger');
const closeMenuIcon = document.querySelector('.logo-close');

burgerIcon.addEventListener('click', openMenuMobile);
closeMenuIcon.addEventListener('click', closeMenuMobile);
window.addEventListener('load',responsiveNavbar);
window.addEventListener('resize',responsiveNavbar);

function responsiveNavbar() {
    if (window.innerWidth>=890) {
        navBar.classList.remove('inactive');
    } else {
        navBar.classList.add('inactive')
    }
}
function openMenuMobile() {
    navBar.classList.toggle('inactive');
}
function closeMenuMobile() {
    navBar.classList.toggle('inactive');
}