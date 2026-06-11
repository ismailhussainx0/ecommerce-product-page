let cartBtn = document.querySelector("#cartBtn");
let cartCounter = document.querySelector("#addToCartCounter");

let counter = 0;

cartBtn.addEventListener("click", function () {
    counter++;
    cartCounter.innerText = counter;

    cartBtn.innerText = "Added!";

    setTimeout(function () {
        cartBtn.innerText = "Add to Cart";
    }, 1000)
});
