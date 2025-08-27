console.log("This is form outside");

// we can print or show document (HTML) from here using object 
console.log(document);
// we can also access element , arttribue and other thing form document ; like  
console.log(document.body);


// if we want to access element under selected class or id and other 

      const nodeList = document.querySelectorAll('.language-list .Favorite');
      console.log(nodeList);
      
      // if we want to access a single element under selected parent 
      const nodeList2 = document.querySelector('.language-list .Favorite');
      console.log(nodeList2);

      // we can also change the value of an attribute 
      let header2 = document.getElementById('p-list');
      console.log(header2);
      
      header2.innerText = "My favorite language";

// we can style with js 
    header2.style.color = 'red';
    header2.style.backgroundColor = 'navy';
    header2.style.borderRadius = '15px';
    
// we can change attribute inner text class and other 

    let favoriteList = document.getElementById('language-p');
    console.log(favoriteList.innerText);
    favoriteList.classList;

    // adding class access the css ;
    favoriteList.classList.add('bg-blue');
    favoriteList.classList.add('bold');
    console.log(favoriteList.classList);
    
    // attribute add or remove 
    const seeAt = favoriteList.getAttribute('id');
    console.log(seeAt);

    // here have a lesson i have to console log every time ;

    const setTitle = favoriteList.setAttribute('title', 'this is favorite book section');
    console.log(setTitle);
    
    