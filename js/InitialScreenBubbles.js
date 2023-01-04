const ul = document.querySelector("ul");

const random = (min, max) => Math.random() * (max - min) + min;

// const randomColors = ["#ffde43", "#ffde43", "#000013", "#b3000b", "#ca5770", "#ffcb14", "#121920"];
const randomIcons = ["SMILE.png", "ANJO.png", "BigFone.BIG_FONE_esq", "CAMAROTE_esq.png", "CORACAO_DIR.png", "ESTALECA.png", "IMUNE_dir.png", "LIDER_esq.png", "PAREDAO.png", "PIPOCA_esq.png"];
const totalIcons = randomIcons.length;

for (let i = 0; i < 30; i++) {
    const li = document.createElement("li");

    const size = Math.floor(random(50, 120));
    const position = random(1, 94);
    const delay = random(5, 1);
    const duration = random(10, 40);
    const image = randomIcons[Math.floor(random(0, totalIcons-1))]

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;

    // li.style.backgroundColor = randomColors[Math.floor(random(0, 7))];
    li.style.backgroundImage = `url(../assets/bbb23/${image})`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;

    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ul.appendChild(li);
}

var counterTicTac = 0;
var counterMemory = 0;
var counterTower = 0;

window.onload = ()=>{
    document.querySelector("#counterTicTac").addEventListener("click", counter);
    document.querySelector("#counterMemory").addEventListener("click", counter2);
    document.querySelector("#counterTower").addEventListener("click", counter3);

    counterTicTac = localStorage.getItem("counterTictac");
    counterMemory = localStorage.getItem("counterMemory");
    counterTower = localStorage.getItem("counterTower");
}

function counter(){
    counterTicTac++;
    localStorage.setItem("counterTictac", counterTicTac.toString());
}

function counter2(){
    counterMemory++;
    localStorage.setItem("counterMemory", counterMemory.toString());
};

function counter3(){
    counterTower++;
    localStorage.setItem("counterTower", counterTower.toString());
};





