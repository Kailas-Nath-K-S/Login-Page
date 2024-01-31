const post = document.querySelector(".post");
const postSection = document.querySelector(".postSection");

post.addEventListener("click", () => {
  postSection.style.display = "block";
});

//postsection

const postTitle = document.querySelector(".title");
const postContent = document.querySelector(".textArea");
const postBtn = document.querySelector(".postbtn");
const displayContent = document.querySelector(".displayContent");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  postSection.style.display = "none";
});

const array = [];
postBtn.addEventListener("click", () => {
  const id = new Date().toUTCString();

  let obj = {
    title: postTitle.value,
    description: postContent.value,
    date:Number(id),
  };

  array.push(obj);
  localStorage.setItem("post", JSON.stringify(array));
  console.log(array);
  postSection.style.display = "none";
  let data = JSON.parse(localStorage.getItem("post"));


  //let sortdata =data.sort((a,b)=>a.date-b.date)
  //console.log(sortdata)
  displayContent.innerHTML = "";
  data.forEach((item) => {
    const postData = document.createElement("div");
    const postTitleEle = document.createElement("p");
    postTitleEle.textContent = item.title;

    const postDescEle = document.createElement("p");
    postDescEle.textContent = item.description;
    postData.appendChild(postTitleEle);
    postData.appendChild(postDescEle);

    const display = `
        <div>
        <div>${item.title}</div>
        <div>${item.description}</div>
        
        
        </div>`;
    displayContent.appendChild(postData);
  });

  console.log(data);

  /*for (let i = 0; i < data.length; i++) {
        displayContent.innerHTML='';
        let display =`
        <div>
        <div>${data[i].title}</div>
        <div>${data[i].description}</div>
        
        
        </div>`
        displayContent.innerHTML +=display
    }*/
});

//store section
const storeSection = document.querySelector(".storeSection");
const categoryTitle = document.querySelector(".catTitle");
const categories = document.querySelector(".tabs");

const menBtn = document.querySelector(".men");
const womenBtn = document.querySelector(".women");
const elecBtn = document.querySelector(".ec");
const jewelBtn = document.querySelector(".jewels");

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
            <div class="itemPrice">${element.price}</div>

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
            <div class="itemPrice">${element.price}</div>

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
            <div class="itemPrice">${element.price}</div>

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
            <div class="itemPrice">${element.price}</div>

        </div>

        

      
      
      `;
    displayContent.innerHTML += exp;
    storeSection.style.display = "none";
  });
});

/*
const url='https://fakestoreapi.com/products/category/'
async function fetchContent(jewelery){
    const datas =await fetch(url+`${jewelery}` );
    const result =await datas.json()
    
 
  result.forEach((element) => {
      const exp=`
      <div class="g1"> 
      <div class="imgContainer">
            <img class="g1pic" src="${element.image}">
            </div>
           
            <div class="itemTitle">${element.title}</div>
            <div class="itemPrice">${element.price}</div>

        </div>
      
      
      `
      displayContent.innerHTML+=exp
      storeSection.style.display='none'
    })
}; */
