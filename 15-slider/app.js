const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = -100;

nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
});

const carousel =  () => {
    counter = (counter === slides.length) ? 0 : counter;
    counter = (counter < 0) ? slides.length - 1 : counter;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}