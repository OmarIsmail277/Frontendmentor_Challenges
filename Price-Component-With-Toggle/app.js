const ball = document.getElementById("ball");
const price1 = document.getElementById("price-1");
const price2 = document.getElementById("price-2");
const price3 = document.getElementById("price-3");


// ball.addEventListener("click", changePrices);


const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', () => {


// })

// var checked = false;

function toggle (){
    if(checkbox.checked==true){
         price1.innerHTML = "19.99";
        price2.innerHTML = "24.99";
        price3.innerHTML = "39.99";
       
    }
    else {
        price1.innerHTML = '199.99';
        price2.innerHTML = '249.99';
        price3.innerHTML = '399.99';
    }
}