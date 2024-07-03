let menu = document.querySelector('nav ul');
let openMenuBtn = document.querySelector('#open_menu_btn');
let closeMenuBtn = document.querySelector('#close_menu_btn');

openMenuBtn.addEventListener('click', () => {
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'inline-block';
    menu.style.display = 'flex';
})
closeMenuBtn.addEventListener('click', () => {
    openMenuBtn.style.display = 'inline-block';
    closeMenuBtn.style.display = 'none';
    menu.style.display = 'none';
})