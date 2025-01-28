export { init, prevSlide, nextSlide, activateDots, goToSlide };
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");
let curSlide = 0;
const lastSlide = slides.length - 1;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
const prevSlide = function (slide) {
  if (curSlide === 0) curSlide = lastSlide;
  else curSlide--;
  goToSlide(curSlide);
  activateDots(curSlide);
};
const nextSlide = function () {
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
const init = function () {
  goToSlide(curSlide);
  createDots();
  activateDots(curSlide);
};
