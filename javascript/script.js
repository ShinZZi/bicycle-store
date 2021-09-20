const nav__menus = document.querySelector('.header__nav-menu');
console.log(nav__menus);

nav__menus.addEventListener('click', () => {
    let menus = nav__menus.querySelectorAll('i');
    let nav__links = document.querySelector('.nav__links');
    console.log(nav__links);
    if (menus[0].classList.contains('active')) {
        menus[1].classList.add('active');
        nav__links.classList.add('active');
        menus[0].classList.remove('active');
    }
    else {
        menus[0].classList.add('active');
        nav__links.classList.remove('active');
        menus[1].classList.remove('active');
    }
})