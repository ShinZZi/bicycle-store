const menu_bars = document.querySelector('.fas.fa-bars');
console.log(menu_bars);

menu_bars.addEventListener('click', () => {
    menu_bars.classList.toggle('active');
})