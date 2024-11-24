const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const links = document.querySelector(".links");
const join = document.querySelector(".join");
const loginBtn = document.querySelector(".login--btn");
const loginModal = document.querySelector(".login-modal");
const loginOverlay = document.querySelector(".login-overlay");
const closeIcon = document.querySelector(".close-icon");
const images = document.querySelectorAll(".product-image");
// const productBtn = document.querySelector(".product-buttons");

//nav menu
function toggleMenu() {
  items.classList.toggle("show");
  links.classList.toggle("show");
  join.classList.toggle("show");
}

menu.addEventListener("click", toggleMenu);

// lazy loading
// const imgTargets = document.querySelectorAll("img[data-src]");
// const lazyloading = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) return;
//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener("load", function () {
//     this.classList.remove("lazy");
//   });
// };
// const imgObserver = new IntersectionObserver(lazyloading, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px",
// });
// imgTargets.forEach((img) => imgObserver.observe(img));

//Show Login Form
const showModal = function () {
  loginModal.classList.remove("hidden");
  loginOverlay.classList.remove("hidden");
};
const hideModal = function () {
  loginModal.classList.add("hidden");
  loginOverlay.classList.add("hidden");
};

loginBtn.addEventListener("click", showModal);
closeIcon.addEventListener("click", hideModal);
// loginOverlay.addEventListener("click", hideModal);

//Product transition
console.log(images);
// images.forEach((img) => {
//   img.addEventListener("mouseover", function () {
//     const photoNum = img.dataset.src;
//     console.log(photoNum);
//     document
//       .querySelector(`div[data-src="${photoNum}"]`)
//       .classList.remove("hidden");
//   });
//   img.addEventListener("mouseout", function () {
//     const photoNum = img.dataset.src;
//     console.log(photoNum);
//     document
//       .querySelector(`div[data-src="${photoNum}"]`)
//       .classList.add("hidden");
//   });
// });
