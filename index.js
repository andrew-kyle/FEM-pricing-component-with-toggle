var spanToggle = document.querySelector("span");

var btnToggle = document.querySelector(".btn");

var basicPrice = document.querySelector(".b");

var proPrice = document.querySelector(".p");

var masterPrice = document.querySelector(".m");

btnToggle.addEventListener("click", function(){

    toggle();

    priceChange();
});

function toggle(){

    spanToggle.classList.toggle("dot-active");
}

function priceChange(){

    if(spanToggle.className === "dot dot-active"){
        basicPrice.innerHTML = "&dollar;199.99";
        proPrice.innerHTML = "&dollar;249.99";
        masterPrice.innerHTML = "&dollar;399.99";
    }
    else{
        basicPrice.innerHTML = "&dollar;19.99";
        proPrice.innerHTML = "&dollar;24.99";
        masterPrice.innerHTML = "&dollar;39.99";
    }
}