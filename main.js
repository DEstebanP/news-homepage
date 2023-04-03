const navBar = document.querySelector('.navbar');
const burgerIcon = document.querySelector('.logo-burger');
const closeMenuIcon = document.querySelector('.logo-close');

burgerIcon.addEventListener('click', openMenuMobile);
closeMenuIcon.addEventListener('click', closeMenuMobile);

function openMenuMobile() {
    navBar.classList.toggle('inactive');
}
function closeMenuMobile() {
    navBar.classList.toggle('inactive');
}