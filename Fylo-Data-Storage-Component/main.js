var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var output1 = document.getElementById("demo-1");

output.innerHTML = (slider.value);
output1.innerHTML = 1000 - (slider.value);



slider.oninput = function () {
    output.innerHTML = this.value;
    output1.innerHTML = 1000 - this.value;
    this.style.backgroundImage = 'linear-gradient(to right, #FFA399 0%, #FF4D97 ' + (this.value) / 10 + '%, #0C122C ' + (this.value) / 10 + '%, #0C122C 100%)'
};











