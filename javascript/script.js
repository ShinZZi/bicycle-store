const menu_bars = document.querySelector('.fas.fa-bars');
const menu_close = document.querySelector('.fas.fa-times');
const nav_links = document.querySelector('.nav__links');
console.log(menu_bars);

menu_bars.addEventListener('click', () => {
    menu_bars.classList.remove('active');
    menu_close.classList.add('active');
    nav_links.classList.add('active');
})

menu_close.addEventListener('click', () => {
    menu_bars.classList.add('active');
    menu_close.classList.remove('active');
    nav_links.classList.remove('active');
})