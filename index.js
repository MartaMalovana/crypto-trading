function openMenu () {
    const menuButton = document.querySelector('.menu__button');
    const menuItems = document.querySelector('.menu__items');

    const toggleMenu = () => {
        menuItems.classList.toggle('menu__items--hide');
    };

    menuButton.addEventListener('click', toggleMenu);
};

openMenu();