let button = document.getElementById('humburger')
let menu = document.getElementById('menu')

button.addEventListener('click', function () {
    button.classList.toggle('active')
    menu.classList.toggle('active')
})