// adding css using javaScript 
console.log('isConnected');

const allSection = document.getElementsByTagName('section');
console.log(allSection);

// we can style inline js
    // for(section of allSection){
    //     console.log(section);
    //     section.style.backgroundColor = 'green';
    //     section.style.padding = '20px';
    //     section.style.margin = '20px';
    //     section.style.borderRadius = '30px';
        
    // }

    // but what if we import from css lets try 
    
    for(section of allSection){
        section.classList.add('section-color') ;
    }
