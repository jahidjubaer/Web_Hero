// first fetch the data form url ;
// before get into that write the function for onclick; we could call form here. but lets do with function ;

// its explain in fetch.js
const showPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((posts) => printData(posts));
};

// post arguments pass with array object ;
const printData = (posts) => {
  const containerDiv = document.getElementById("post-container");
  // to prevent repeating ;
  containerDiv.innerHTML = " ";

  // for getting each object from the array looping ;
  posts.forEach((element) => {
    // creating a new elements li and change the inner text and then append as a child to its parent class ;
    const div = document.createElement("div");

    // here i change the inner html ; with dynamic way ;
    div.innerHTML = `
      <div class="post-card">
        <h1>${element.title}</h1>
        <p>
          ${element.body}
        </p>
      </div>
      `;

    containerDiv.appendChild(div);
  });
};

// here i call that it will show without click ;
showPost();
