function moveRandomEl(elm){
   elm.style.position = "absolute";
   elm.style.top = Math.floor(Math.random() * 90 +5)+"%";
   Element.style.left = Math.floor(Math.random() * 90 +5) +"%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter",function(e){
    moveRandomEl(e.target);
});