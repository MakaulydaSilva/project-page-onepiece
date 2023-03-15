const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');
const header = document.querySelector('.menu');
const link = document.querySelectorAll('.a-responsive');



hamburgerMenu.addEventListener('click', () => {
    const clickHamburger = hamburgerMenu.classList.toggle('active');
    const menuResponsive = menu.classList.toggle('active');
    const click = header.classList.toggle('active');

    if (menuResponsive) menu.classList.add('menuRes');
    if (!menuResponsive) menu.classList.remove('menuRes');

    if (click) header.classList.add('menu-responsive');
    if (!click) header.classList.remove('menu-responsive');

    link.forEach((element) => {
        if (clickHamburger) element.classList.add('link-responsive');
        if (!clickHamburger) element.classList.remove('link-responsive');
    });
});


