const panel =   document.getElementById("panel");
const burger = document.getElementById("menu");

function myFunction() {
  panel.classList.toggle("show");
  }

burger.addEventListener("click", () => {
  panel.classList.toggle("show");
})



