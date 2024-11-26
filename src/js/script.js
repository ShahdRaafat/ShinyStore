const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const links = document.querySelector(".links");
const join = document.querySelector(".join");
const loginBtn = document.querySelector(".login--btn");
const loginModal = document.querySelector(".login-modal");
const loginOverlay = document.querySelector(".login-overlay");
const closeIcon = document.querySelector(".close-icon");
// const images = document.querySelectorAll(".product-image");
const hearts = document.querySelectorAll(".products .fa-heart");
// const productBtn = document.querySelector(".product-buttons");

import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";
import product3 from "../images/product3.webp";
import product4 from "../images/product4.webp";
import product5 from "../images/product5.webp";
import product6 from "../images/product6.webp";

//nav menu
function toggleMenu() {
  items.classList.toggle("show");
  links.classList.toggle("show");
  join.classList.toggle("show");
}

menu.addEventListener("click", toggleMenu);

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
// console.log(images);
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

//lazy loading

const imgMap = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
};

const imgTargets = document.querySelectorAll("img[data-src]");

const lazyloading = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;
    const imgNum = img.dataset.num;
    if (imgMap[imgNum]) {
      img.src = imgMap[imgNum]; // Set the actual src
      img.addEventListener("load", function () {
        img.classList.remove("lazy-img");
      });
    }

    observer.unobserve(img);
  });
};

const imgObserver = new IntersectionObserver(lazyloading, {
  root: null,
  threshold: 0,
  rootMargin: "100px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

//Product transition
const fillHeart = function (heart) {
  heart.classList.remove("fa-regular");
  heart.classList.add("fa-solid");
};

const emptyHeart = function (heart) {
  heart.classList.remove("fa-solid");
  heart.classList.add("fa-regular");
};

hearts.forEach((heart) => {
  let isClicked = false;

  heart.addEventListener("mouseover", function () {
    if (!isClicked) fillHeart(heart);
  });

  heart.addEventListener("mouseout", function () {
    if (!isClicked) emptyHeart(heart);
  });

  heart.addEventListener("click", function () {
    isClicked = !isClicked;
    if (isClicked) {
      fillHeart(heart);
    } else {
      emptyHeart(heart);
    }
  });
});
