document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector('#create-recipes')
    const form = document.querySelector('#id-form')
    const popup = document.querySelector('.popup')
    
    button = addEventListener('click', () => {
        form.classList.add('open')
        popup.classList.add('popup_open')
    })
})