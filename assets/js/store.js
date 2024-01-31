const storeSection = document.querySelector(".storeSection");
const categoryTitle = document.querySelector(".catTitle");
const categories = document.querySelector(".tabs");

const menBtn = document.querySelector(".men");
const womenBtn = document.querySelector(".women");
const elecBtn = document.querySelector(".ec");
const jewelBtn = document.querySelector(".jewels");
const displayContent = document.querySelector(".displayContent");

menBtn.addEventListener("click", async () => {
  const datas = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  const result = await datas.json();

  result.forEach((element) => {
    const exp = `
      <div class="g1"> 
      <div class="imgContainer">
            <img class="g1pic" src="${element.image}">
            </div>
           
            <div class="itemTitle">${element.title}</div>
            <div class="itemPrice">$${element.price}</div>

        </div>
      
      
      `;
    displayContent.innerHTML += exp;
    storeSection.style.display = "none";
  });
});

womenBtn.addEventListener("click", async () => {
  const datas = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const result = await datas.json();

  result.forEach((element) => {
    const exp = `
      <div class="g1"> 
      <div class="imgContainer">
            <img class="g1pic" src="${element.image}">
            </div>
           
            <div class="itemTitle">${element.title}</div>
            <div class="itemPrice">$${element.price}</div>

        </div>
      
      
      `;
    displayContent.innerHTML += exp;
    storeSection.style.display = "none";
  });
});

elecBtn.addEventListener("click", async () => {
  const datas = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  );
  const result = await datas.json();

  result.forEach((element) => {
    const exp = `
      <div class="g1"> 
      <div class="imgContainer">
            <img class="g1pic" src="${element.image}">
            </div>
           
            <div class="itemTitle">${element.title}</div>
            <div class="itemPrice"$${element.price}</div>

        </div>
      
      
      `;
    displayContent.innerHTML += exp;
  });
});

jewelBtn.addEventListener("click", async () => {
  const datas = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  const result = await datas.json();

  result.forEach((element) => {
    const exp = `
      <div class="g1"> 
      <div class="imgContainer">
            <img class="g1pic" src="${element.image}">
            </div>
           
            <div class="itemTitle">${element.title}</div>
            <div class="itemPrice">$${element.price}</div>

        </div>

        

      
      
      `;
    displayContent.innerHTML += exp;
    storeSection.style.display = "none";
  });
});