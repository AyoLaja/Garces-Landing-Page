console.log('started')

function clickNavItem(button) {
    const navButtons = [...document.querySelectorAll('.nav-items a')]

    if(!button.classList.contains('active')) {
        navButtons.forEach(button => {
            button.classList.remove('active')
        })
        button.classList.add('active')
    }
}

function showMenu() {
    console.log('menu shown')
    const sideNav = document.querySelector('#side-nav')
    sideNav.style.width = "100%"
}

function closeMenu() {
    console.log('menu shown')
    const sideNav = document.querySelector('#side-nav')
    sideNav.style.width = "0%"
}

const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')

menuOpen.addEventListener('click', showMenu)
menuClose.addEventListener('click', closeMenu)


