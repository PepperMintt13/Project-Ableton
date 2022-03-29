const navBurger = document.querySelector('#burger')
const navMenu = document.querySelector('#nav-links')

navBurger.addEventListener('click', ()=>{
    navMenu.classList.toggle('is-active')
})