const e=document.querySelector(".recommended-products"),t=document.querySelector(".results"),n=document.querySelector(".weather-icon"),r=document.querySelector(".temp"),o=document.querySelector(".humidity"),i=document.querySelector(".tip"),c={sunny:[{name:"Sunscreen SPF 50",shortName:"Sunscreen",description:"Lightweight, broad-spectrum protection perfect for sunny days.",price:"500 LE",image:"images/productSunscreen.webp"},{name:"Aloevera Gel",shortName:"Aloevera",description:"Natural made aloevera gel to protect from sun damage.",price:"200 LE",image:"images/productAloevera.webp"}],rainy:[{name:"Waterproof Moisturizer",shortName:"Waterproof",description:"Long-lasting hydration that stays put in humid conditions.",price:"300 LE",image:"images/productWaterproof.webp"},{name:"Anti-Frizz Serum",shortName:"Serum",description:"Keep your hair smooth and protected in humid weather.",price:"350 LE",image:"images/productSerum.webp"}],cold:[{name:"Body Butter",shortName:"BodyButter",description:"Deep moisturizing butter for cold weather protection.",price:"400 LE",image:"images/productBodyButter.webp"},{name:"Lip Balm",shortName:"LipBalm",description:"Protect your Lips from harsh winter conditions.",price:"120 LE",image:"images/productLipBalm.webp"}]},a={sunny:"☀️ Sunny day tip: Don't forget your sunscreen and stay hydrated!",rainy:"\uD83C\uDF27️ Rainy day tip: Use waterproof skincare products to maintain protection!",cold:"❄️ Cold day tip: Focus on moisture barrier protection and hydration!"},s=async function(e){let t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=9ca1eec279b0d19e2fd63afff224821e&units=metric`);if(!t.ok)throw Error("Weather data not found");return await t.json()},d=function(t){let n=c[t];e.innerHTML="",n.forEach(t=>{let n=`
        <div class="product">
                  <img
                    src=${t.image}
                    class="product-image"
                    alt="Image of product recommendation"
                  />

                  <div class="text">
                    <div class="product-description">
                      <p class="name">${t.name}</p>
                      <p class="description">
                        ${t.description}
                      </p>
                      <div class="last-row">
                        <p class="price">${t.price}</p>
                        <button class="add-to-cart btn" data-src=${t.shortName}>Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
    `;e.innerHTML+=n})},l=function(e){var c;t.classList.remove("hidden");let s=Math.round(e.main.temp),l=e.main.humidity,u=(c=e.weather[0].main,s>30?"sunny":c.toLowerCase().includes("rain")?"rainy":s<20?"cold":"sunny"),m="fa-sun";"rainy"===u?m="fa-cloud-rain":"cold"===u&&(m="fa-cloud"),n.classList.remove("fa-sun"),n.classList.remove("fa-cloud"),n.classList.remove("fa-cloud-rain"),n.classList.add(m),r.textContent=`${s}\xb0C`,o.textContent=`Humidity: ${l}%`,i.textContent=a[u],d(u)},u=document.querySelector(".makeup .slider"),m=document.querySelectorAll(".makeup .slide"),f=function(){return window.innerWidth>1200?4:window.innerWidth>992&&window.innerWidth<=1200?3:window.innerWidth>768&&window.innerWidth<=992?2:1};let p=0,y=f(),h=m.length;const v=function(){y=f();let e=m[0].offsetWidth+20;u.style.transition="transform 0.5s ease-in-out",u.style.transform=`translateX(-${p*e}px)`};v();const g=function(){p>=h-y?p=0:p++,v()};window.addEventListener("resize",v);const L=document.querySelectorAll(".testimonials .slide"),q=document.querySelector(".dots");let S=0;const w=L.length-1,b=function(e){L.forEach((t,n)=>{t.style.transform=`translateX(${(n-e)*100}%)`})},E=function(){0===S?S=w:S--,b(S),x(S)},k=function(){S===w?S=0:S++,b(S),x(S)},x=function(e){document.querySelectorAll(".dots__dot").forEach(e=>e.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")},$=function(e){S=e},A=document.querySelector(".recommendations-form"),C=document.querySelector(".city"),M=document.querySelector(".results"),I=document.querySelector(".menu"),T=document.querySelector(".items"),_=document.querySelector(".links"),W=document.querySelector(".join"),B=document.querySelector(".login--btn"),H=document.querySelector(".login-modal"),N=document.querySelector(".login-overlay"),D=document.querySelector(".close-icon");document.querySelector(".products"),document.querySelectorAll(".products .fa-heart");const z=document.querySelector(".view-overlay"),j=document.querySelector(".cart"),F=document.querySelector(".shopping"),O=document.querySelector(".shopping-list"),X=document.querySelector(".shopping-overlay"),P=document.querySelector(".close-cart"),R=document.querySelector(".favorites-list"),U=document.querySelectorAll(".section"),V=document.querySelector(".nav-header"),G=document.querySelector(".header"),K=document.querySelectorAll("nav .link"),J=document.querySelector(".start--btn"),Q=new IntersectionObserver(function(e,t){let n=e[0];n.isIntersecting&&(n.target.classList.remove("section-hidden"),t.unobserve(n.target))},{root:null,threshold:.1});U.forEach(e=>{e.classList.add("section-hidden"),Q.observe(e)});const Y=V.getBoundingClientRect().height;new IntersectionObserver(function(e){e[0].isIntersecting?V.classList.remove("sticky"):V.classList.add("sticky")},{root:null,threshold:0,rootMargin:`-${Y}px`}).observe(G);const Z=function(e){if(!e.id)return;let t=document.querySelector(`.${e.id}-link`);K.forEach(e=>e.classList.remove("active-link")),t.classList.add("active-link")},ee=new IntersectionObserver(function(e){let t=e[0];t.isIntersecting&&(Z(t.target),console.log("sahhd"))},{root:null,threshold:.2});U.forEach(e=>{ee.observe(e)});const et=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})};_.addEventListener("click",function(e){e.preventDefault(),et(e.target.getAttribute("href"))}),J.addEventListener("click",function(e){e.preventDefault(),et(e.target.getAttribute("href"))}),I.addEventListener("click",function(){T.classList.toggle("show"),_.classList.toggle("show"),W.classList.toggle("show")}),B.addEventListener("click",function(){H.classList.remove("hidden"),N.classList.remove("hidden")}),D.addEventListener("click",function(){H.classList.add("hidden"),N.classList.add("hidden")});const en=document.querySelectorAll("img[data-src]"),er=new IntersectionObserver(function(e,t){e.forEach(e=>{if(!e.isIntersecting)return;let n=e.target;n&&(n.src=n.dataset.src,n.addEventListener("load",function(){n.classList.remove("lazy-img")})),t.unobserve(n)})},{root:null,threshold:0,rootMargin:"100px"});en.forEach(e=>er.observe(e));const eo=function(e){let t=e.dataset.src,n=document.querySelector(`.product-${t} .text .name`).textContent,r=document.querySelector(`.product-${t} .text .description`).textContent,o=document.querySelector(`.product-${t} .text .price`).textContent,i=Math.floor(10*Math.random())+1,c=`
  <div class="vieww">
  <i class="fa-solid fa-xmark close-view"></i>
  <div class="view-product">
            <div class="view-image">
              <img src="/images/product${t}.webp" alt="product-1" />
            </div>
            <div class="view-info">
              
              <div class="text">
              <h3 class="name">${n}</h3>
                <h4 class="description">
                  ${r}
                </h4>
                <p class="price">${o}</p>
                <p class="tax">Tax Included</p>
                <p class="remaining">${i} pieces left , buy yours now!</p>
                <div class="buttons">
                  <div class="input-quantity">
                    <i class="fa-solid fa-minus"></i>
                    <input
                      type="number"
                      name="quantity"
                      class="quantity"
                      placeholder="1"
                      data-current="1"
                      data-max="${i}"
                    />
                    <i class="fa-solid fa-plus"></i>
                  </div>

                  <i class="fa-regular fa-heart" data-src="${t}" ></i>
                  <button class="add-to-cart btn" data-src="${t}">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
          </div>`;z.innerHTML=c,z.querySelector(".fa-heart")},ei=function(){z.classList.remove("hidden")},ec=function(){z.classList.add("hidden")};document.addEventListener("click",function(e){let t=e.target.closest(".fa-eye");t&&(eo(t),ei())}),z.addEventListener("click",function(e){if(e.target.classList.contains("close-view")){ec();return}if(e.target.classList.contains("fa-minus")||e.target.classList.contains("fa-plus")){let t=z.querySelector(".quantity"),n=+t.dataset.max,r=+t.dataset.current;r=e.target.classList.contains("fa-minus")?Math.max(r-1,1):Math.min(r+1,n),t.dataset.current=r,t.value=r}});let ea=[],es=[];const ed=function(e){let t=e.closest(".product"),n=e.closest(".view-product"),r=e.dataset.src;return{imgUrl:`/images/product${r}.webp`,name:t?.querySelector(".name").textContent||n?.querySelector(".name").textContent,price:t?.querySelector(".price").textContent||n?.querySelector(".price").textContent,quantity:+(n?.querySelector(".quantity").value||1)}},el=function(e){return`
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
  `},eu=function(e){let t=ea.find(t=>t.name===e.name);t?t.quantity+=e.quantity:ea.push(e),em(),ef()},em=function(){O.innerHTML="",ea.forEach(e=>{let t=el(e);O.insertAdjacentHTML("afterbegin",t)});let e=ea.reduce((e,t)=>e+t.quantity,0);document.querySelector(".cart-count").textContent=e,ey()},ef=()=>{let e=document.querySelector(".toast");e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},3500)},ep=e=>parseFloat(e.replace(/[^\d.]/g,"")),ey=function(){let e=ea.reduce((e,t)=>e+ep(t.price)*Number(t.quantity),0)+50;document.querySelector(".cart-total").innerHTML=`
    <p>Subtotal: ${e-50} LE</p>
    <p>Delivery: 50 LE</p>
    <p><strong>Total: ${e} LE</strong></p>
  `};j.addEventListener("click",function(){X.style.visibility="visible",F.style.transform="translateX(0%)"}),P.addEventListener("click",function(){F.style.transform="translateX(40%)",X.style.visibility="hidden"}),document.addEventListener("click",function(e){e.target.classList.contains("add-to-cart")&&(eu(ed(e.target)),e.target.closest(".view-product")&&ec())}),O.addEventListener("click",function(e){if(e.target.classList.contains("delete")){let t=e.target.closest(".cart-item"),n=ea.findIndex(e=>e.name===t.querySelector(".name").textContent);ea.splice(n,1),em()}});const eh=function(e){e.classList.remove("fa-regular"),e.classList.add("fa-solid")},ev=function(e){e.classList.remove("fa-solid"),e.classList.add("fa-regular")},eg=e=>{let t=ed(e),n=es.findIndex(e=>e.name===t.name);-1===n?(es.push(t),eh(e)):(es.splice(n,1),ev(e)),eL()},eL=function(){R.innerHTML="",es.forEach(e=>{let t=el(e);R.insertAdjacentHTML("afterbegin",t)})};document.addEventListener("click",e=>{e.target.classList.contains("fa-heart")&&eg(e.target)}),document.addEventListener("click",e=>{if(e.target.classList.contains("delete")){let t=e.target.closest(".cart-item"),n=es.findIndex(e=>e.name===t.querySelector(".name").textContent);-1!==n&&(es.splice(n,1),eL(),document.querySelectorAll(".fa-heart").forEach(e=>{let n=e.closest(".product");n&&n.querySelector(".name").textContent===t.querySelector(".name").textContent&&ev(e)}))}}),A.addEventListener("submit",async function(e){e.preventDefault();let t=C.value.trim();if(t)try{let e=await s(t);l(e),M.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){console.error("Error fetching Weather data",e),alert("'Error fetching weather data. Please try again.'")}});const eq=document.querySelector(".fa-angle-left"),eS=document.querySelector(".fa-angle-right");setInterval(()=>{g()},3e3),eq.addEventListener("click",function(){p<=0?p=h-y:p--,v()}),eS.addEventListener("click",g);const ew=document.querySelector(".fa-arrow-left"),eb=document.querySelector(".fa-arrow-right"),eE=document.querySelector(".dots");b(S),L.forEach((e,t)=>{q.insertAdjacentHTML("beforeend",`
            <button class="dots__dot" data-slide=${t}></button>
            `)}),x(S),eb.addEventListener("click",k),ew.addEventListener("click",E),document.addEventListener("keydown",function(e){"ArrowRight"===e.key?k():"ArrowLeft"===e.key&&E()}),eE.addEventListener("click",function(e){if(e.target.classList.contains("dots__dot")){let{slide:t}=e.target.dataset;$(+t),b(t),x(t)}});
//# sourceMappingURL=index.aa190beb.js.map
