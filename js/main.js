const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
})
);

const menu_btn = document.querySelector('.mobile-menu-btn');
const mobile_menu = document.querySelector('.mobile-menu');
const film = document.querySelector('.film');

menu_btn.addEventListener('click', function () {
    mobile_menu.classList.toggle('is-active');
    menu_btn_c.classList.toggle('is-visible');
    film.classList.toggle('is-visible');
});

const menu_btn_c = document.querySelector('.mobile-menu-btn-c');

menu_btn_c.addEventListener('click', function () {
    mobile_menu.classList.toggle('is-active');
    menu_btn_c.classList.toggle('is-visible');
    film.classList.toggle('is-visible');
});


