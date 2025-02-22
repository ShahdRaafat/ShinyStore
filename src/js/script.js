import {
  getWeatherData,
  getWeatherCategory,
  updateUI,
} from "./recommendProducts.js";
import {
  init,
  nextSlide,
  prevSlide,
  activateDots,
  goToSlide,
  updateCurSlide,
  moveNext,
  movePrev,
  startAutoplay,
} from "./slider.js";

const recommendationsForm = document.querySelector(".recommendations-form");
const cityInput = document.querySelector(".city");
const weatherResults = document.querySelector(".results");
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
const viewProductOverlay = document.querySelector(".view-overlay");
const shoppingCart = document.querySelector(".cart");
const shopping = document.querySelector(".shopping");
const shoppingList = document.querySelector(".shopping-list");
const shoppingOverlay = document.querySelector(".shopping-overlay");
const closeCartBtn = document.querySelector(".close-cart");
const favoritesList = document.querySelector(".favorites-list");
const sections = document.querySelectorAll(".section");
const nav = document.querySelector(".nav-header");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll("nav .link");
const startBtn = document.querySelector(".start--btn");
//Revealing Sections
const revealSection = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});
sections.forEach((s) => {
  s.classList.add("section-hidden");
  sectionObserver.observe(s);
});

//Sticky nav
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
navObserver.observe(header);

// Activate Nav Link
const activateLink = function (sec) {
  if (!sec.id) return;
  const navLink = document.querySelector(`.${sec.id}-link`);
  navLinks.forEach((l) => l.classList.remove("active-link"));
  navLink.classList.add("active-link");
};
const activateFunction = function (entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  activateLink(entry.target);
};
const activateObserver = new IntersectionObserver(activateFunction, {
  root: null,
  threshold: 0.2,
});
sections.forEach((s) => {
  activateObserver.observe(s);
});

// Smooth Scrolling
const scrollTo = function (id) {
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
};
//nav smooth scrolling
links.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  scrollTo(id);
});
//button smooth scrolling
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  scrollTo(id);
});

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

//lazy loading

const imgTargets = document.querySelectorAll("img[data-src]");

const lazyloading = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;

    if (img) {
      img.src = img.dataset.src; // Set the actual src
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
  const markup = `
  <div class="vieww">
  <i class="fa-solid fa-xmark close-view"></i>
  <div class="view-product">
            <div class="view-image">
              <img src="/images/product${product}.webp" alt="product-1" />
            </div>
            <div class="view-info">
              
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

                  <i class="fa-regular fa-heart" data-src="${product}" ></i>
                  <button class="add-to-cart btn" data-src="${product}">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          </div>`;
  viewProductOverlay.innerHTML = markup;
  const heartIcon = viewProductOverlay.querySelector(".fa-heart");
};

//Show view product modal
const showProduct = function () {
  viewProductOverlay.classList.remove("hidden");
};

//hide view product modal
const hideProduct = function () {
  viewProductOverlay.classList.add("hidden");
};

document.addEventListener("click", function (e) {
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

//open shopping cart
const openCart = function () {
  // shoppingOverlay.classList.remove("not-visible");
  shoppingOverlay.style.visibility = "visible";
  shopping.style.transform = "translateX(0%)";
};
//close shopping cart
const closeCart = function () {
  shopping.style.transform = "translateX(40%)";
  shoppingOverlay.style.visibility = "hidden";
  // shoppingOverlay.classList.add("not-visible");
};

let cart = [];
let favorites = [];
//extract product data based on which button i have clicked
const getProductData = function (button) {
  const productElement = button.closest(".product");
  const ModalElement = button.closest(".view-product");

  const num = button.dataset.src;
  const imgUrl = `public/images/product${num}.webp`;

  const name =
    productElement?.querySelector(".name").textContent ||
    ModalElement?.querySelector(".name").textContent;

  const price =
    productElement?.querySelector(".price").textContent ||
    ModalElement?.querySelector(".price").textContent;

  const quantity = ModalElement?.querySelector(".quantity").value || 1;
  return { imgUrl, name, price, quantity: +quantity };
};

const generateProductMarkup = function (product) {
  return `
    <li class="cart-item">
      <div class="cart-img">
      <img src="${product.imgUrl}" alt="cart item image"/>
      </div>
      <div class="info">
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>
        <p class="quantity">${product.quantity}</p>
        <i class="fa-solid fa-trash delete"></i>
      </div>
      
      
    </li>
  `;
};
// Add to shopping cart
const addToCart = function (product) {
  const existingProduct = cart.find((p) => p.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  updateCartUi();
  showToast();
};

const updateCartUi = function () {
  shoppingList.innerHTML = "";
  cart.forEach((product) => {
    const markup = generateProductMarkup(product);
    shoppingList.insertAdjacentHTML("afterbegin", markup);
  });
  //Calculating total number of items in the cart
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  document.querySelector(".cart-count").textContent = cartCount;
  calculateTotal();
};
//Function Showing added Successfully Message
const showToast = () => {
  const toast = document.querySelector(".toast");
  toast.classList.add("show");

  // Hide toast after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
};
const extractNumber = (price) => parseFloat(price.replace(/[^\d.]/g, ""));
const calculateTotal = function () {
  console.log(cart);
  const delivery = 50;
  const totalPrice =
    cart.reduce(
      (total, item) =>
        total + extractNumber(item.price) * Number(item.quantity),
      0
    ) + delivery;
  document.querySelector(".cart-total").innerHTML = `
    <p>Subtotal: ${totalPrice - delivery} LE</p>
    <p>Delivery: ${delivery} LE</p>
    <p><strong>Total: ${totalPrice} LE</strong></p>
  `;
};
//Event Listeners for shopping cart
shoppingCart.addEventListener("click", openCart);

closeCartBtn.addEventListener("click", closeCart);

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    const product = getProductData(e.target);
    addToCart(product);
    if (e.target.closest(".view-product")) hideProduct();
  }
});

shoppingList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const item = e.target.closest(".cart-item");
    const index = cart.findIndex(
      (i) => i.name === item.querySelector(".name").textContent
    );
    cart.splice(index, 1);
    updateCartUi();
  }
});

//Add to favorites

//Product like button transition
const fillHeart = function (heart) {
  heart.classList.remove("fa-regular");
  heart.classList.add("fa-solid");
};

const emptyHeart = function (heart) {
  heart.classList.remove("fa-solid");
  heart.classList.add("fa-regular");
};
// const manipulateHeart = function (heart) {
//   let isClicked = false;

//   heart.addEventListener("mouseover", function () {
//     if (!isClicked) fillHeart(heart);
//   });

//   heart.addEventListener("mouseout", function () {
//     if (!isClicked) emptyHeart(heart);
//   });

//   heart.addEventListener("click", function () {
//     isClicked = !isClicked;
//     if (isClicked) {
//       fillHeart(heart);
//     } else {
//       emptyHeart(heart);
//     }
//   });
// };
// hearts.forEach((heart) => manipulateHeart(heart));

// Function to add/remove favorites
const toggleFavorite = (heart) => {
  const product = getProductData(heart);
  const index = favorites.findIndex((p) => p.name === product.name);

  if (index === -1) {
    // Product not in favorites -> Add it
    favorites.push(product);
    fillHeart(heart);
  } else {
    // Product exists in favorites -> Remove it
    favorites.splice(index, 1);
    emptyHeart(heart);
  }

  updateFavoritesUi();
};

const updateFavoritesUi = function () {
  favoritesList.innerHTML = "";
  favorites.forEach((product) => {
    const markup = generateProductMarkup(product);
    favoritesList.insertAdjacentHTML("afterbegin", markup);
  });
};
//Event Listeners for favorites list
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-heart")) {
    toggleFavorite(e.target);
  }
});
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const item = e.target.closest(".cart-item");

    // Remove from favorites if exists
    const favIndex = favorites.findIndex(
      (p) => p.name === item.querySelector(".name").textContent
    );
    if (favIndex !== -1) {
      favorites.splice(favIndex, 1);
      updateFavoritesUi();

      // Update heart icon to be regular (unfilled)
      document.querySelectorAll(".fa-heart").forEach((heart) => {
        const heartProduct = heart.closest(".product");
        if (
          heartProduct &&
          heartProduct.querySelector(".name").textContent ===
            item.querySelector(".name").textContent
        ) {
          emptyHeart(heart);
        }
      });
    }
  }
});

//Recommend products base on weather
recommendationsForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      updateUI(weatherData);
      weatherResults.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      console.error("Error fetching Weather data", err);
      alert("'Error fetching weather data. Please try again.'");
    }
  }
});
//productSlider
const btnLeftProduct = document.querySelector(".fa-angle-left");
const btnRightProduct = document.querySelector(".fa-angle-right");
startAutoplay();
btnLeftProduct.addEventListener("click", movePrev);
btnRightProduct.addEventListener("click", moveNext);
//Testimonials Slider
//Slider Elements
const btnLeft = document.querySelector(".fa-arrow-left");
const btnRight = document.querySelector(".fa-arrow-right");
const dotsContainer = document.querySelector(".dots");
//Initializing
init();
//Slider Event Listeners
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") prevSlide();
});
//Event Delegation <3
dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    updateCurSlide(+slide);
    goToSlide(slide);
    activateDots(slide);
  }
});
