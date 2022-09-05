const ul = document.querySelector("ul");

const random = (min, max) => Math.random() * (max - min) + min;

const randomColors = ["#1D782C", "#70DE62", "#37df5b", "#4af06e", "#7DF76D", "#9fd69d", "#D5E4CF"];

for (let i = 0; i < 50; i++) {
    const li = document.createElement("li");

    const size = Math.floor(random(50, 120));
    const position = random(1, 94);
    const delay = random(5, 1);
    const duration = random(10, 40);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;

    li.style.backgroundColor = randomColors[Math.floor(random(0, 7))];

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ul.appendChild(li);
}

var counterTicTac = 0;
var counterMemory = 0;

window.onload = ()=>{
    document.querySelector("#counterTicTac").addEventListener("click", counter);
    document.querySelector("#counterMemory").addEventListener("click", counter2);

    counterTicTac = localStorage.getItem("counterTictac")
    counterMemory = localStorage.getItem("counterMemory")
}

function counter(){
    counterTicTac++;
    localStorage.setItem("counterTictac", counterTicTac.toString());
}

function counter2(){
    counterMemory++;
    localStorage.setItem("counterMemory", counterMemory.toString());
};
