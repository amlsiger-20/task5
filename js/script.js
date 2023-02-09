var AllProducts = document.querySelectorAll(".item")
var div1 = document.querySelector(".space")
var div2 = document.querySelector(".totalprice")
var btn = document.querySelector(".btn")
var totalprice = 0;

AllProducts.forEach( function (item) {
    item.onclick = function () {
        totalprice += parseInt (item.getAttribute ("price"))
        div1.innerHTML += item.textContent + " . "

        if (div1.innerHTML != ""){
            div1.style.display = "block";
            btn.style.display = "block";
        }
    }
})

btn.onclick = function () {
    div2.innerHTML = totalprice
    div2.style.display = "block"
}