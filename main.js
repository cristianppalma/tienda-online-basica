const menuEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){
    // const isCarritoMenuCloset = carritoMenu.classList.contains('inactive');

    // if (!isCarritoMenuCloset) {
    //     carritoMenu.classList.add('inactive');
    // }

    carritoMenu.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // const isCarritoMenuCloset = carritoMenu.classList.contains('inactive');

    // if (!isCarritoMenuCloset) {
    //     carritoMenu.classList.add('inactive');
    // }

    carritoMenu.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu() {
    // const isMobileMenuCloset = mobileMenu.classList.contains('inactive');

    // if (!isMobileMenuCloset) {
    //     mobileMenu.classList.add('inactive');
    // }
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    carritoMenu.classList.toggle('inactive');
}
