// first fetch the data form url ;
// before get into that write the function for onclick; we could call form here. but lets do with function ;

// its explain in fetch.js 
const showPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((posts) => printData(posts));

// post arguments pass with array object ; 
  const printData = (posts) => {
    // for getting each object from the array looping ; 
    posts.forEach((element) => {
    // creating a new elements li and change the inner text and then append as a child to its parent class ; 
      const li = document.createElement("li");
      li.innerText = element.title;

      const ul = document.getElementById("post-title-list");
      ul.appendChild(li);
    });
  };
};
