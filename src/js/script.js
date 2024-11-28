const menu = document.querySelector(".menu");
const items = document.querySelector(".items");
const links = document.querySelector(".links");
const join = document.querySelector(".join");
const loginBtn = document.querySelector(".login--btn");
const loginModal = document.querySelector(".login-modal");
const loginOverlay = document.querySelector(".login-overlay");
const closeIcon = document.querySelector(".close-icon");
const products = document.querySelector(".products");
const hearts = document.querySelectorAll(".products .fa-heart");
// const productBtn = document.querySelector(".product-buttons");
// const plusBtn = document.querySelector('.fa-plus');
// const minusBtn = document.querySelector('.fa-minus');
// const quantity = document.querySelector(".input-quantity");
// const quantityField = document.querySelector(".quantity");
// const viewProduct = document.querySelectorAll(".fa-eye");
const viewProductOverlay = document.querySelector(".view-overlay");
// const closeViewProduct = document.querySelector(".close-view");

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

//lazy loading
import product1 from "../images/product1.webp";
import product2 from "../images/product2.webp";
import product3 from "../images/product3.webp";
import product4 from "../images/product4.webp";
import product5 from "../images/product5.webp";
import product6 from "../images/product6.webp";
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

//Product like button transition
const fillHeart = function (heart) {
  heart.classList.remove("fa-regular");
  heart.classList.add("fa-solid");
};

const emptyHeart = function (heart) {
  heart.classList.remove("fa-solid");
  heart.classList.add("fa-regular");
};
const manipulateHeart = function (heart) {
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
};
hearts.forEach((heart) => manipulateHeart(heart));

//view product info
const generateViewProduct = function (btn) {
  const product = btn.dataset.src;

  const name = document.querySelector(
    `.product-${product} .text .name`
  ).textContent;
  const description = document.querySelector(
    `.product-${product} .text .description`
  ).textContent;
  const price = document.querySelector(
    `.product-${product} .text .price`
  ).textContent;
  const remainingPieces = Math.floor(Math.random() * 10) + 1;
  const markup = `<div class="view-product">
            <div class="view-image">
              <img src="${imgMap[product]}.webp" alt="product-1" />
            </div>
            <div class="view-info">
              <i class="fa-solid fa-xmark close-view"></i>
              <div class="text">
              <h3 class="name">${name}</h3>
                <h4 class="description">
                  ${description}
                </h4>
                <p class="price">${price}</p>
                <p class="tax">Tax Included</p>
                <p class="remaining">${remainingPieces} pieces left , buy yours now!</p>
                <div class="buttons">
                  <div class="input-quantity">
                    <i class="fa-solid fa-minus"></i>
                    <input
                      type="number"
                      name="quantity"
                      class="quantity"
                      placeholder="1"
                      data-current="1"
                      data-max="${remainingPieces}"
                    />
                    <i class="fa-solid fa-plus"></i>
                  </div>

                  <i class="fa-regular fa-heart"></i>
                  <button class="add-to-cart btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>`;
  viewProductOverlay.innerHTML = markup;
  const heartIcon = viewProductOverlay.querySelector(".fa-heart");
  manipulateHeart(heartIcon);
};

//Show view product modal
const showProduct = function () {
  viewProductOverlay.classList.remove("hidden");
};

//hide view product modal
const hideProduct = function () {
  viewProductOverlay.classList.add("hidden");
  console.log("shahd");
};

products.addEventListener("click", function (e) {
  const view = e.target.closest(".fa-eye");
  if (!view) return;
  generateViewProduct(view);
  showProduct();
});

//event listeners for the view product modal
viewProductOverlay.addEventListener("click", function (e) {
  //closing the modal
  if (e.target.classList.contains("close-view")) {
    hideProduct();
    return;
  }

  //increasing and decreasing quantity
  if (
    e.target.classList.contains("fa-minus") ||
    e.target.classList.contains("fa-plus")
  ) {
    const quantityField = viewProductOverlay.querySelector(".quantity");
    const maxQuantity = +quantityField.dataset.max;
    let currentQuantity = +quantityField.dataset.current;
    currentQuantity = e.target.classList.contains("fa-minus")
      ? Math.max(currentQuantity - 1, 1)
      : Math.min(currentQuantity + 1, maxQuantity);

    quantityField.dataset.current = currentQuantity;
    quantityField.value = currentQuantity;
  }
});
