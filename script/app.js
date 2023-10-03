let button = document.querySelectorAll(".modal-project button");
let cards = document.querySelectorAll(".card");     
let modal = document.querySelector(".modal-project");
let img = document.querySelector(".modal-project img");
let array = [];
let counter = 0;


cards.forEach(function(card){
    let cardImg = card.querySelector("img");
    array.push(cardImg.src);

    cardImg.addEventListener("click",function(e){
        let imgSrc = e.target.src;
        modal.classList.add("show");
        img.src = imgSrc;
        counter = array.indexOf(imgSrc);
    })
})


button.forEach(function(button){
    button.addEventListener("click",function(e){
        let btn = e.target.className;

        if (btn === "close"){
            modal.classList.remove("show")
        }
        if (btn === "btn2"){
            counter++;
            if ( counter > cards.length - 1){
                counter = 0;
            }

        }
        if (btn === "btn"){
            counter--;
            if ( counter < 0){
                counter = cards.length - 1;
            }
        }

        let cardImg = cards[counter].querySelector("img");
        let cardImgSrc = cardImg.getAttribute("src")
        img.src = cardImgSrc;
    })
})





let buttons = document.querySelectorAll(".button-wrapper button");
let input = document.querySelector(".input");


buttons.forEach(function(btn){
    btn.addEventListener("click", function(e){
        e.preventDefault;
        let filter = e.target.dataset.filter

        cards.forEach(function(items){

            if(filter === "all"){
            items.style.display = "block";
        } else if (items.classList.contains(filter)) {
            items.style.display = "block";
        } else {
            items.style.display = "none";
        }
    
    })
    })
})



function my() {
let cards = document.querySelectorAll(".card");

 input.addEventListener("keyup", function(e){

    let filter = e.target.value.toLowerCase().trim()

    cards.forEach(function(items){
        let h3 = items.querySelector("h3");
        if (h3.innerText.toLowerCase().includes(filter)){
            items.style.display = "block";
    } else {
        items.style.display ="none";
    }
    })
})   
}

my();








