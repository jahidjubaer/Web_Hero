// fetch the data
const url = "https://jsonplaceholder.typicode.com/todos";
fetch(url)
  .then((response) => response.json())
  .then((data) => showData(data));

//   show the data 
const showData = (data) => {

// get the container ; 
  const dataContainer = document.getElementById("list-container");
  dataContainer.innerHTML = " ";

//   get the data as object using for each ; 
  data.forEach((element) => {
    // create new element ; 
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="shadow-sm rounded-sm p-2 bg-white mb-4 flex items-center gap-2">
            <p>
            ${
              element.completed == true
                ? `<i class="fa-solid fa-2xl fa-square-check"></i>`
                : `<i class="fa-solid fa-2xl fa-square"></i>`
            }
            </p>
            <h3>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde rem ex
             dolore omnis quam placeat velit vero officiis cumque illum.
            </h3>
        </div>
    `;
    // append the new element ; 
    dataContainer.appendChild(div);
  });
};

showData()
