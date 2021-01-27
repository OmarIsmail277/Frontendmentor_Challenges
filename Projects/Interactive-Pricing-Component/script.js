const slider = document.getElementById("slider");
const priceContainer = document.getElementById("price-demo");

const checkbox = document.querySelector("#checkbox");
const pageviewsCount = document.getElementById("page-views");

slider.addEventListener("input", updatePrice);
checkbox.addEventListener("input", updatePrice);

function updatePrice() {
    let price;

    if (slider.value >= 0 && slider.value <= 20) {
        pageviewsCount.textContent = "10K";
        price = 8;
    } else if (slider.value > 20 && slider.value <= 40) {
    pageviewsCount.textContent = "50K";
    price = 12;
  } else if (slider.value > 40 && slider.value <= 60) {
    pageviewsCount.textContent = "100K";
    price = 16;
  } else if (slider.value > 60 && slider.value <= 80) {
    pageviewsCount.textContent = "500K";
    price = 24;
  } else if (slider.value > 80 && slider.value <= 100) {
    pageviewsCount.textContent = "1M";
    price = 36;
  }

  if (checkbox.checked == true) {
      // console.log(price);
    priceContainer.textContent = `$${(price - (price * 25) / 100).toFixed(2)}`;
  }
  else {
      priceContainer.textContent = `$${price}.00`;
  }
  slider.style.background = `linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${slider.value}%, #eaeefb ${slider.value}%, #eaeefb 100%`;
      // slider.style.backgroundImage = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + (this.value)  + '%, #eaeefb ' + (this.value) + '%, #eaeefb 100%)';

 }


 // priceContainer.innerHTML = (slider.value) + ".00";



// slider.oninput = function () {
//     priceContainer.innerHTML = this.value;

//     // this.style.backgroundImage = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + (this.value) * fill_width + '%, #eaeefb ' + (this.value) * fill_width + '%, #eaeefb 100%)'
//     priceContainer.innerHTML = (slider.value) + ".00";

// };

