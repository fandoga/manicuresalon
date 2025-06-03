
const menuLinks = document.querySelector('.menu_links');
const signUpButton = document.querySelector('.button');
const ServiceItems = document.querySelectorAll('.ServicesBlock_item');
const ServicesTrack = document.querySelector('.services_track');
const ServicesItems = document.querySelectorAll('.services_item');
const btnNext = document.querySelector('.right_arrow_wrapper');
const btnPrev = document.querySelector('.left_arrow_wrapper');

let element;
const offset = 50;
let isDropdownOpen = false;
let elementPosition
let offsetPosition
let pos = 1;
let currentSlide = 0;
let itemWidth = ServicesItems[0].offsetWidth + 24;
let visibleSlides
if (window.matchMedia("(max-width: 820px)").matches) {
    console.log(213)
    visibleSlides = 1
} else if (window.matchMedia("(max-width: 1380px)").matches) {
    visibleSlides = 3
} else {
    visibleSlides = 4
}

document.addEventListener('click', (event) => {
    Event = event.target
    console.log(Event.id);
    Item = ServiceItems[Event.id - 1]
    if (Event.dataset.target) {
        event.preventDefault()
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    } else if (Event.closest('.nav_icon_link')) {
        Event = Event.closest('.nav_icon_link');
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    } else if (Event.closest('a')) {
        Event = Event.closest('a')
        element = document.querySelector(Event.dataset.target);
        elementPosition = element.getBoundingClientRect().top;
        offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        return;
    }

})

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back_to_top");

    // Показать/скрыть кнопку при прокрутке страницы
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.bottom = "-20px";
        } else {
            backToTop.style.bottom = "-200px";
        }
    });

    // Плавная прокрутка при клике на кнопку
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    btnNext.addEventListener('click', () => {
        if (currentSlide < ServicesItems.length - visibleSlides) {
            console.log(visibleSlides);
            currentSlide++;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            ServicesTrack.style.transform = `translateX(-${itemWidth * currentSlide}px)`;
        }
    });

});