const slides = document.querySelectorAll('.slide')

const body = document.querySelector('body')

slides.forEach((item) => {
    item.addEventListener('click', () => {
        slides.forEach((slide) => {
            slide.className = 'slide'
        })
        item.className = 'slide active'
        body.style.backgroundImage = item.style.backgroundImage
    })
})