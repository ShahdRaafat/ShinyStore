//Products slider
export { moveNext, movePrev, startAutoplay };
const slider = document.querySelector(".makeup .slider");
const productSlides = document.querySelectorAll(".makeup .slide");

const getVisibleSlides = function () {
  if (window.innerWidth > 1200) return 4;
  else if (window.innerWidth > 992 && window.innerWidth <= 1200) return 3;
  else if (window.innerWidth > 768 && window.innerWidth <= 992) return 2;
  else return 1;
};

let firstSlide = 0;
let visibleSlides = getVisibleSlides();
let autoSlideInterval;
console.log(visibleSlides);
let totalSlides = productSlides.length;

const updateSlider = function () {
  visibleSlides = getVisibleSlides();
  let slideWidth = productSlides[0].offsetWidth + 20;

  slider.style.transition = "transform 0.4s ease-in-out";
  slider.style.transform = `translateX(-${firstSlide * slideWidth}px)`;
};
updateSlider();

const moveNext = function () {
  if (firstSlide >= totalSlides - visibleSlides) {
    firstSlide = 0;
  } else {
    firstSlide++;
  }
  updateSlider();
};

const movePrev = function () {
  if (firstSlide <= 0) {
    firstSlide = totalSlides - visibleSlides;
  } else {
    firstSlide--;
  }
  updateSlider();
};
function startAutoplay() {
  autoSlideInterval = setInterval(() => {
    moveNext();
  }, 3000);
}
// function resetAutoplay() {
//   clearInterval(autoSlideInterval);
//   startAutoplay();
// }
window.addEventListener("resize", updateSlider);

//Testimonial Slider
export { init, prevSlide, nextSlide, activateDots, goToSlide, updateCurSlide };
const slides = document.querySelectorAll(".testimonials .slide");
const dotsContainer = document.querySelector(".dots");
let curSlide = 0;
const lastSlide = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
const prevSlide = function () {
  if (curSlide === 0) curSlide = lastSlide;
  else curSlide--;
  goToSlide(curSlide);
  activateDots(curSlide);
};
const nextSlide = function () {
  console.log(curSlide);
  if (curSlide === lastSlide) curSlide = 0;
  else curSlide++;
  goToSlide(curSlide);
  activateDots(curSlide);
};
const createDots = function () {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <button class="dots__dot" data-slide=${i}></button>
            `
    );
  });
};
const activateDots = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
const updateCurSlide = function (slide) {
  curSlide = slide;
  console.log(curSlide);
};
const init = function () {
  goToSlide(curSlide);
  createDots();
  activateDots(curSlide);
};
