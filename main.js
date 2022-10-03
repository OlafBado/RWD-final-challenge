const nav = document.querySelector('.nav')
const button = document.querySelector('.nav__toggle')

button.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
})