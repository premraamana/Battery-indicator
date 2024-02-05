var percentage = document.querySelector(".percentage");
var percentage = document.querySelector(".percentage");

navigator.getbattery().then(function (battery){
    percentage.style.width = battery.level *100+ "%";
});

let sec = document.querySelector(".sec");
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click",function() {
    sec.classList.toggle("dark");
});