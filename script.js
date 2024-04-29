let arrow = document.querySelector('#dist-branch');

const flowerbloc = document.querySelector("#flowerbloc");
const elsebloc = document.querySelector("#elsebloc");
const blocks = document.querySelectorAll(".flex-list-item-dd");


function doSomething() {



    //flowerbloc.style.position = "relative";
    //flowerbloc.style.top = "4rem";
    
    for (let i=0; i <= blocks.length; i++) {

        blocks.classList.add(".branch-animation");

    }

   


    
}

arrow.addEventListener("click", doSomething);