var toggleBtn = document.querySelector('label')
var body = document.querySelector('body')

function init() {
    var mode = localStorage.getItem('mode') ? 'dark' : ''
    body.setAttribute('class', mode)
}
init()

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark')

    var mode = body.getAttribute('class') ? 'dark' : ''
    localStorage.setItem('mode', mode)
})