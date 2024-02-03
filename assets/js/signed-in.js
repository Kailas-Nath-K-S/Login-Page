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



function display(){
  window.open('/pages/store.html')
}

