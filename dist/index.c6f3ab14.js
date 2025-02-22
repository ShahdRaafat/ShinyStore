function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,r={},n={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire94c2=o),(0,o.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["krNw4","index.c6f3ab14.js","6DKw7","sunscreen.0f43df46.webp","6tIME","aloevera.c580cfae.webp","bVIxH","waterproof.0271010c.webp","h7S07","serum.dbe3c1f8.webp","hdbYK","bodyButter.f0f6b4e4.webp","gXTLI","lipBalm.1b3fee47.webp"]'));var a={};a=new URL("sunscreen.0f43df46.webp",import.meta.url).toString();var c={};c=new URL("aloevera.c580cfae.webp",import.meta.url).toString();var i={};i=new URL("waterproof.0271010c.webp",import.meta.url).toString();var s={};s=new URL("serum.dbe3c1f8.webp",import.meta.url).toString();var l={};l=new URL("bodyButter.f0f6b4e4.webp",import.meta.url).toString();var d={};d=new URL("lipBalm.1b3fee47.webp",import.meta.url).toString();const u=document.querySelector(".recommended-products"),m=document.querySelector(".results"),f=document.querySelector(".weather-icon"),p=document.querySelector(".temp"),y=document.querySelector(".humidity"),v=document.querySelector(".tip"),g={sunny:[{name:"Sunscreen SPF 50",description:"Lightweight, broad-spectrum protection perfect for sunny days.",price:"500 LE",image:e(a)},{name:"Aloevera Gel",description:"Natural made aloevera gel to protect from sun damage.",price:"200 LE",image:e(c)}],rainy:[{name:"Waterproof Moisturizer",description:"Long-lasting hydration that stays put in humid conditions.",price:"300 LE",image:e(i)},{name:"Anti-Frizz Serum",description:"Keep your hair smooth and protected in humid weather.",price:"350 LE",image:e(s)}],cold:[{name:"Body Butter",description:"Deep moisturizing butter for cold weather protection.",price:"400 LE",image:e(l)},{name:"Lip Balm",description:"Protect your Lips from harsh winter conditions.",price:"120 LE",image:e(d)}]},h={sunny:"☀️ Sunny day tip: Don't forget your sunscreen and stay hydrated!",rainy:"\uD83C\uDF27️ Rainy day tip: Use waterproof skincare products to maintain protection!",cold:"❄️ Cold day tip: Focus on moisture barrier protection and hydration!"},L=async function(e){let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=9ca1eec279b0d19e2fd63afff224821e&units=metric`);if(!t.ok)throw Error("Weather data not found");let r=await t.json();return console.log(r),r},S=function(e){let t=g[e];console.log(t),u.innerHTML="",t.forEach(e=>{let t=`
        <div class="product">
                  <img
                    src=${e.image}
                    class="product-image"
                    alt="Image of product recommendation"
                  />

                  <div class="text">
                    <div class="product-description">
                      <p class="name">${e.name}</p>
                      <p class="description">
                        ${e.description}
                      </p>
                      <div class="last-row">
                        <p class="price">${e.price}</p>
                        <button class="add-to-cart btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
    `;u.innerHTML+=t})},w=function(e){var t;m.classList.remove("hidden");let r=Math.round(e.main.temp);console.log(r),console.log("shahd");let n=e.main.humidity,o=(t=e.weather[0].main,r>30?"sunny":t.toLowerCase().includes("rain")?"rainy":r<20?"cold":"sunny"),a="fa-sun";"rainy"===o?a="fa-cloud-rain":"cold"===o&&(a="fa-cloud"),f.classList.remove("fa-sun"),f.classList.remove("fa-cloud"),f.classList.remove("fa-cloud-rain"),f.classList.add(a),p.textContent=`${r}\xb0C`,y.textContent=`Humidity: ${n}%`,v.textContent=h[o],S(o)},b=document.querySelector(".makeup .slider"),q=document.querySelectorAll(".makeup .slide"),E=function(){return window.innerWidth>1200?4:window.innerWidth>992&&window.innerWidth<=1200?3:window.innerWidth>768&&window.innerWidth<=992?2:1};let _=0,x=E();console.log(x);let k=q.length;const H=function(){x=E();let e=q[0].offsetWidth+20;b.style.transition="transform 0.5s ease-in-out",b.style.transform=`translateX(-${_*e}px)`};H();const A=function(){_>=k-x?_=0:_++,H()};window.addEventListener("resize",H);const $=document.querySelectorAll(".testimonials .slide"),R=document.querySelector(".dots");let C=0;const M=$.length-1,F=function(e){$.forEach((t,r)=>{t.style.transform=`translateX(${(r-e)*100}%)`})},I=function(){0===C?C=M:C--,F(C),U(C)},T=function(){console.log(C),C===M?C=0:C++,F(C),U(C)},U=function(e){document.querySelectorAll(".dots__dot").forEach(e=>e.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")},D=function(e){console.log(C=e)},O=document.querySelector(".recommendations-form"),W=document.querySelector(".city"),B=document.querySelector(".results"),j=document.querySelector(".menu"),z=document.querySelector(".items"),N=document.querySelector(".links"),X=document.querySelector(".join"),P=document.querySelector(".login--btn"),K=document.querySelector(".login-modal"),V=document.querySelector(".login-overlay"),G=document.querySelector(".close-icon");document.querySelector(".products"),document.querySelectorAll(".products .fa-heart");const J=document.querySelector(".view-overlay"),Y=document.querySelector(".cart"),Q=document.querySelector(".shopping"),Z=document.querySelector(".shopping-list"),ee=document.querySelector(".shopping-overlay"),et=document.querySelector(".close-cart"),er=document.querySelector(".favorites-list"),en=document.querySelectorAll(".section"),eo=document.querySelector(".nav-header"),ea=document.querySelector(".header"),ec=document.querySelectorAll("nav .link"),ei=document.querySelector(".start--btn"),es=new IntersectionObserver(function(e,t){let r=e[0];r.isIntersecting&&(r.target.classList.remove("section-hidden"),t.unobserve(r.target))},{root:null,threshold:.1});en.forEach(e=>{e.classList.add("section-hidden"),es.observe(e)});const el=eo.getBoundingClientRect().height;new IntersectionObserver(function(e){e[0].isIntersecting?eo.classList.remove("sticky"):eo.classList.add("sticky")},{root:null,threshold:0,rootMargin:`-${el}px`}).observe(ea);const ed=function(e){if(!e.id)return;let t=document.querySelector(`.${e.id}-link`);ec.forEach(e=>e.classList.remove("active-link")),t.classList.add("active-link")},eu=new IntersectionObserver(function(e){let t=e[0];t.isIntersecting&&ed(t.target)},{root:null,threshold:.2});en.forEach(e=>{eu.observe(e)});const em=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})};N.addEventListener("click",function(e){e.preventDefault(),em(e.target.getAttribute("href"))}),ei.addEventListener("click",function(e){e.preventDefault(),em(e.target.getAttribute("href"))}),j.addEventListener("click",function(){z.classList.toggle("show"),N.classList.toggle("show"),X.classList.toggle("show")}),P.addEventListener("click",function(){K.classList.remove("hidden"),V.classList.remove("hidden")}),G.addEventListener("click",function(){K.classList.add("hidden"),V.classList.add("hidden")});const ef=document.querySelectorAll("img[data-src]"),ep=new IntersectionObserver(function(e,t){e.forEach(e=>{if(!e.isIntersecting)return;let r=e.target;r&&(r.src=r.dataset.src,r.addEventListener("load",function(){r.classList.remove("lazy-img")})),t.unobserve(r)})},{root:null,threshold:0,rootMargin:"100px"});ef.forEach(e=>ep.observe(e));const ey=function(e){let t=e.dataset.src,r=document.querySelector(`.product-${t} .text .name`).textContent,n=document.querySelector(`.product-${t} .text .description`).textContent,o=document.querySelector(`.product-${t} .text .price`).textContent,a=Math.floor(10*Math.random())+1,c=`
  <div class="vieww">
  <i class="fa-solid fa-xmark close-view"></i>
  <div class="view-product">
            <div class="view-image">
              <img src="/images/product${t}.webp" alt="product-1" />
            </div>
            <div class="view-info">
              
              <div class="text">
              <h3 class="name">${r}</h3>
                <h4 class="description">
                  ${n}
                </h4>
                <p class="price">${o}</p>
                <p class="tax">Tax Included</p>
                <p class="remaining">${a} pieces left , buy yours now!</p>
                <div class="buttons">
                  <div class="input-quantity">
                    <i class="fa-solid fa-minus"></i>
                    <input
                      type="number"
                      name="quantity"
                      class="quantity"
                      placeholder="1"
                      data-current="1"
                      data-max="${a}"
                    />
                    <i class="fa-solid fa-plus"></i>
                  </div>

                  <i class="fa-regular fa-heart" data-src="${t}" ></i>
                  <button class="add-to-cart btn" data-src="${t}">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          </div>`;J.innerHTML=c,J.querySelector(".fa-heart")},ev=function(){J.classList.remove("hidden")},eg=function(){J.classList.add("hidden")};document.addEventListener("click",function(e){let t=e.target.closest(".fa-eye");t&&(ey(t),ev())}),J.addEventListener("click",function(e){if(e.target.classList.contains("close-view")){eg();return}if(e.target.classList.contains("fa-minus")||e.target.classList.contains("fa-plus")){let t=J.querySelector(".quantity"),r=+t.dataset.max,n=+t.dataset.current;n=e.target.classList.contains("fa-minus")?Math.max(n-1,1):Math.min(n+1,r),t.dataset.current=n,t.value=n}}),cart=[],favorites=[];const eh=function(e){let t=e.closest(".product"),r=e.closest(".view-product"),n=e.dataset.src;return{imgUrl:`public/images/product${n}.webp`,name:t?.querySelector(".name").textContent||r?.querySelector(".name").textContent,price:t?.querySelector(".price").textContent||r?.querySelector(".price").textContent,quantity:+(r?.querySelector(".quantity").value||1)}},eL=function(e){return`
    <li class="cart-item">
      <div class="cart-img">
      <img src="${e.imgUrl}" alt="cart item image"/>
      </div>
      <div class="info">
        <p class="name">${e.name}</p>
        <p class="price">${e.price}</p>
        <p class="quantity">${e.quantity}</p>
        <i class="fa-solid fa-trash delete"></i>
      </div>
      
      
    </li>
  `},eS=function(e){let t=cart.find(t=>t.name===e.name);t?t.quantity+=e.quantity:cart.push(e),ew(),eb()},ew=function(){Z.innerHTML="",cart.forEach(e=>{let t=eL(e);Z.insertAdjacentHTML("afterbegin",t)});let e=cart.reduce((e,t)=>e+t.quantity,0);document.querySelector(".cart-count").textContent=e,eE()},eb=()=>{let e=document.querySelector(".toast");e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3500)},eq=e=>parseFloat(e.replace(/[^\d.]/g,"")),eE=function(){console.log(cart);let e=cart.reduce((e,t)=>e+eq(t.price)*Number(t.quantity),0)+50;document.querySelector(".cart-total").innerHTML=`
    <p>Subtotal: ${e-50} LE</p>
    <p>Delivery: 50 LE</p>
    <p><strong>Total: ${e} LE</strong></p>
  `};Y.addEventListener("click",function(){ee.style.visibility="visible",Q.style.transform="translateX(0%)"}),et.addEventListener("click",function(){Q.style.transform="translateX(40%)",ee.style.visibility="hidden"}),document.addEventListener("click",function(e){e.target.classList.contains("add-to-cart")&&(eS(eh(e.target)),e.target.closest(".view-product")&&eg())}),Z.addEventListener("click",function(e){if(e.target.classList.contains("delete")){let t=e.target.closest(".cart-item"),r=cart.findIndex(e=>e.name===t.querySelector(".name").textContent);cart.splice(r,1),ew()}});const e_=function(e){e.classList.remove("fa-regular"),e.classList.add("fa-solid")},ex=function(e){e.classList.remove("fa-solid"),e.classList.add("fa-regular")},ek=e=>{let t=eh(e),r=favorites.findIndex(e=>e.name===t.name);-1===r?(favorites.push(t),e_(e)):(favorites.splice(r,1),ex(e)),eH()},eH=function(){er.innerHTML="",favorites.forEach(e=>{let t=eL(e);er.insertAdjacentHTML("afterbegin",t)})};document.addEventListener("click",e=>{e.target.classList.contains("fa-heart")&&ek(e.target)}),document.addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.closest(".cart-item"),r=favorites.findIndex(e=>e.name===t.querySelector(".name").textContent);-1!==r&&(favorites.splice(r,1),eH(),document.querySelectorAll(".fa-heart").forEach(e=>{let r=e.closest(".product");r&&r.querySelector(".name").textContent===t.querySelector(".name").textContent&&ex(e)}))}}),O.addEventListener("submit",async function(e){e.preventDefault();let t=W.value.trim();if(t)try{let e=await L(t);w(e),B.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){console.error("Error fetching Weather data",e),alert("'Error fetching weather data. Please try again.'")}});const eA=document.querySelector(".fa-angle-left"),e$=document.querySelector(".fa-angle-right");setInterval(()=>{A()},3e3),eA.addEventListener("click",function(){_<=0?_=k-x:_--,H()}),e$.addEventListener("click",A);const eR=document.querySelector(".fa-arrow-left"),eC=document.querySelector(".fa-arrow-right"),eM=document.querySelector(".dots");F(C),$.forEach((e,t)=>{R.insertAdjacentHTML("beforeend",`
            <button class="dots__dot" data-slide=${t}></button>
            `)}),U(C),eC.addEventListener("click",T),eR.addEventListener("click",I),document.addEventListener("keydown",function(e){"ArrowRight"===e.key?T():"ArrowLeft"===e.key&&I()}),eM.addEventListener("click",function(e){if(e.target.classList.contains("dots__dot")){let{slide:t}=e.target.dataset;D(+t),F(t),U(t)}});
//# sourceMappingURL=index.c6f3ab14.js.map
