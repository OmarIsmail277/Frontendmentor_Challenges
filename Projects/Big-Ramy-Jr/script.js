function showTab(tabName, button) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";

  var tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  button.classList.add("active");
}

var weekItems = document.querySelectorAll(".week");

weekItems.forEach(function (week) {
  var section = week.querySelector(".section");
  var lecture = week.querySelector(".lecture");

  section.addEventListener("click", function () {
    week.classList.toggle("active");
  });
});
