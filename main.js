console.log('started')

//FOR TOGGLING NAV ITEMS
function clickNavItem(button) {
    const navButtons = [...document.querySelectorAll('.nav-items a')]
    
    if(!button.classList.contains('active')) {
        navButtons.forEach(button => {
            button.classList.remove('active')
        })
        button.classList.add('active')
    }
}

//FOR DISPLAYING NAV
function showMenu() {
    const sideNav = document.querySelector('#side-nav')
    sideNav.style.width = "100%"
}

function closeMenu() {
    const sideNav = document.querySelector('#side-nav')
    sideNav.style.width = "0%"
}

const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')

menuOpen.addEventListener('click', showMenu)
menuClose.addEventListener('click', closeMenu)


//FOR CAROUSEL
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = [...document.querySelectorAll('.mySlides')]
    let currentSlideIndex = document.querySelector('.currentSlideIndex')
    // console.log(slides)

    if (n > slides.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex-1].style.display = "block"
    currentSlideIndex.textContent = slideIndex
}


