export { getWeatherData, getWeatherCategory, updateUI };
const API_KEY = "9ca1eec279b0d19e2fd63afff224821e";
const recommendedProducts = document.querySelector(".recommended-products");
const weatherResults = document.querySelector(".results");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temp");
const humidityField = document.querySelector(".humidity");
const tip = document.querySelector(".tip");
import sunscreen from "../images/sunscreen.webp";
import aloevera from "../images/aloevera.webp";
import waterproof from "../images/waterproof.webp";
import serum from "../images/serum.webp";
import bodyButter from "../images/bodyButter.webp";
import lipBalm from "../images/lipBalm.webp";
//Weather Product recommendation
const weatherProducts = {
  sunny: [
    {
      name: "Sunscreen SPF 50",
      description:
        "Lightweight, broad-spectrum protection perfect for sunny days.",
      price: "500 LE",
      image: sunscreen,
    },
    {
      name: "Aloevera Gel",
      description: "Natural made aloevera gel to protect from sun damage.",
      price: "200 LE",
      image: aloevera,
    },
  ],
  rainy: [
    {
      name: "Waterproof Moisturizer",
      description: "Long-lasting hydration that stays put in humid conditions.",
      price: "300 LE",
      image: waterproof,
    },
    {
      name: "Anti-Frizz Serum",
      description: "Keep your hair smooth and protected in humid weather.",
      price: "350 LE",
      image: serum,
    },
  ],
  cold: [
    {
      name: "Body Butter",
      description: "Deep moisturizing butter for cold weather protection.",
      price: "400 LE",
      image: bodyButter,
    },
    {
      name: "Lip Balm",
      description: "Protect your Lips from harsh winter conditions.",
      price: "120 LE",
      image: lipBalm,
    },
  ],
};
// Weather tips based on conditions
const weatherTips = {
  sunny: "☀️ Sunny day tip: Don't forget your sunscreen and stay hydrated!",
  rainy:
    "🌧️ Rainy day tip: Use waterproof skincare products to maintain protection!",
  cold: "❄️ Cold day tip: Focus on moisture barrier protection and hydration!",
};

const getWeatherData = async function (city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Weather data not found");
  }
  const data = await response.json();
  console.log(data);
  return data;
};
const getWeatherCategory = function (temp, weatherMain) {
  if (temp > 30) return "sunny";
  if (weatherMain.toLowerCase().includes("rain")) return "rainy";
  if (temp < 20) return "cold";
  return "sunny";
};
const generateProductMarkup = function (weatherCategory) {
  const products = weatherProducts[weatherCategory];
  console.log(products);
  recommendedProducts.innerHTML = "";
  products.forEach((product) => {
    const markup = `
        <div class="product">
                  <img
                    src=${product.image}
                    class="product-image"
                    alt="Image of product recommendation"
                  />

                  <div class="text">
                    <div class="product-description">
                      <p class="name">${product.name}</p>
                      <p class="description">
                        ${product.description}
                      </p>
                      <div class="last-row">
                        <p class="price">${product.price}</p>
                        <button class="add-to-cart btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
    `;
    recommendedProducts.innerHTML += markup;
  });
};

const updateUI = function (data) {
  weatherResults.classList.remove("hidden");
  //extracting info from weather data
  const temp = Math.round(data.main.temp);
  console.log(temp);
  console.log("shahd");
  const humidity = data.main.humidity;

  let weatherCategory = getWeatherCategory(temp, data.weather[0].main);

  let icon = "fa-sun";
  if (weatherCategory === "rainy") {
    icon = "fa-cloud-rain";
  } else if (weatherCategory === "cold") {
    icon = "fa-cloud";
  }
  //updating fields of weather data
  weatherIcon.classList.remove("fa-sun");
  weatherIcon.classList.remove("fa-cloud");
  weatherIcon.classList.remove("fa-cloud-rain");
  weatherIcon.classList.add(icon);
  temperature.textContent = `${temp}°C`;
  humidityField.textContent = `Humidity: ${humidity}%`;
  tip.textContent = weatherTips[weatherCategory];

  //inserting the recommended products
  generateProductMarkup(weatherCategory);
};
