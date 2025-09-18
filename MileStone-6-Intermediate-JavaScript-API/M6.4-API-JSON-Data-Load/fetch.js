function loadData() {
  // fetch -> request to the server for data ;
  fetch("https://jsonplaceholder.typicode.com/posts") // it will return a promise to give response ;
    .then((response) => response.json()) // then return a response ; then we converted this response into json -> it will return a promise to give json ;
    .then((data) => console.log(data)); // if there have data it will give those data and we can console this data ;
}

const PostData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => loadPost(data)); // here we call loadPost function ; with a arguments data ; it will pass as and array of object ;
};

const loadPost = (data) => {
  // value fo data is array of object so we can print each of them using forEach ;
  data.forEach((element) => {
    console.log(element);
  });
};
