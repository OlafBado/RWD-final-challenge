const nav = document.querySelector('.nav')
const toggle = document.querySelector('.nav__toggle')
const buttons = document.querySelectorAll('.button')

toggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
    buttons.forEach(btn => {
        btn.classList.toggle('nav--visible--button')
    })
})

