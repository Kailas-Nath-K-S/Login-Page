const storeSection = document.querySelector(".storeSection");
const categoryTitle = document.querySelector(".catTitle");

const btnContainer = document.querySelector(".btnContainer");

const menBtn = document.querySelector(".men");
const womenBtn = document.querySelector(".women");
const elecBtn = document.querySelector(".ec");
const jewelBtn = document.querySelector(".jewels");
const displayContent = document.querySelector(".displayContent");

menBtn.addEventListener("click", async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const result = await data.json();
displayContent.innerHTML=''
  result.forEach((element) => {
    const exp = `
      <div class="product"> 
      <div class="imgContainer">
            <img class="img" src="${element.image}">
            </div>
           <div class="productInfo">
            <div class="productTitle">${element.title}</div>
            <div class="productPrice">$${element.price}</div>
        </div>
        </div>
      
      
      `;
    displayContent.innerHTML += exp;
   
  });
});

womenBtn.addEventListener("click", async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const result = await data.json();
  displayContent.innerHTML=''
  result.forEach((element) => {
    const exp = `
      <div class="product"> 
      <div class="imgContainer">
            <img class="img" src="${element.image}">
            </div>
            <div class="productInfo">
            <div class="productTitle">${element.title}</div>
            <div class="productPrice">$${element.price}</div>
            </div>
        </div>
      
      
      `;
    displayContent.innerHTML += exp;
    
  });
});

elecBtn.addEventListener("click", async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const result = await data.json();
  displayContent.innerHTML=''
  result.forEach((element) => {
    const exp = `
      <div class="product"> 
      <div class="imgContainer">
            <img class="img" src="${element.image}">
            </div>
            <div class="productInfo">
            <div class="productTitle">${element.title}</div>
            <div class="productPrice"> $${element.price}</div>
            </div>
        </div>
      
      
      `;
    displayContent.innerHTML += exp;
  });
});

jewelBtn.addEventListener("click", async () => {
  const data = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const result = await data.json();
  displayContent.innerHTML=''
  result.forEach((element) => {
    const exp = `
      <div class="product"> 
      <div class="imgContainer">
            <img class="img" src="${element.image}">
            </div>
            <div class="productInfo">
            <div class="productTitle">${element.title}</div>
            <div class="productPrice">$${element.price}</div>
            </div>
        </div>

        

      
      
      `;
    displayContent.innerHTML += exp;
    
  });
});