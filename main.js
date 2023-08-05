const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    // if (desktopMenu.style.display === 'none') {
    //     desktopMenu.style.display = 'block';
    // } else {
    //     desktopMenu.style.display = 'none'
    // }
}
