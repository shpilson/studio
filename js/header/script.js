/* Когда пользователь прокручивает вниз, скрыть навигационную панель. Когда пользователь прокручивает вверх, показать навигационную панель */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header__top").style.top = "0px";
    } else {
        document.querySelector(".header__top").style.top = "-50%";
    }
    prevScrollpos = currentScrollPos;
}