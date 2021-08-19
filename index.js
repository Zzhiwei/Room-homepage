

const burger = document.querySelector('.header__menu-burger')
const mobileMenu = document.querySelector('.header__nav-content')
const headerLinks = document.querySelector('.header__links')
const menuLinks = document.querySelectorAll('.header__link a')
const header__menu_burger = document.querySelector('.header__menu-burger')

burger.addEventListener('click', e => {
    mobileMenu.classList.toggle('open')
    header__menu_burger.classList.toggle('active')
    setTimeout(() => {
        headerLinks.classList.toggle("visible")
    }, 100) 
})

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        console.log("after clicking link ")
        mobileMenu.classList.toggle('open')
        header__menu_burger.classList.toggle('active')
        headerLinks.classList.toggle("visible")
    })
})


/*
###############
carousell Images
###############
*/

const prevImgButton = document.querySelector('.prevImg') 
const nextImgButton = document.querySelector('.nextImg') 
const images = document.querySelectorAll('.hero-image')
const heroText = document.querySelector('.flexWrapper')
const shopNowHeader = document.querySelector('#shopnow_header')
const shopNowParagraph = document.querySelector('#shopnow_paragraph')

const textA = {
    heading: 'Discover innovative ways to decorate.',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
}
const textB = {
    heading: 'We are available all across the globe.',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
}
const textC = {
    heading: 'Manufactured with the best materials.',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
}

const texts = [textA, textB, textC]

let currentIndex = 0
images[currentIndex].classList.toggle('front')
images[currentIndex].classList.toggle('zoom')
shopNowHeader.textContent = texts[currentIndex].heading
shopNowParagraph.textContent = texts[currentIndex].description

prevImgButton.addEventListener('click', () => {
    prevImgButton.disabled = true
    images[currentIndex].classList.toggle('zoom')
    heroText.classList.toggle('floatDown')
    
    setTimeout(() => {
        images[currentIndex].classList.toggle('front')
        currentIndex = currentIndex - 1 < 0
            ? 2
            : currentIndex - 1
        shopNowHeader.textContent = texts[currentIndex].heading
        shopNowParagraph.textContent = texts[currentIndex].description    
        heroText.classList.toggle('floatDown')
        images[currentIndex].classList.toggle('front')
        images[currentIndex].classList.toggle('zoom')
        prevImgButton.disabled = false

    }, 300)

})

nextImgButton.addEventListener('click', async () => {
    nextImgButton.disabled = true
    images[currentIndex].classList.toggle('zoom')
    heroText.classList.toggle('floatDown')
    setTimeout(() => {
        images[currentIndex].classList.toggle('front')
        currentIndex = (currentIndex + 1) % 3
        shopNowHeader.textContent = texts[currentIndex].heading
        shopNowParagraph.textContent = texts[currentIndex].description  
        heroText.classList.toggle('floatDown')
        images[currentIndex].classList.toggle('front')
        images[currentIndex].classList.toggle('zoom')
        nextImgButton.disabled = false
    }, 300)

})

