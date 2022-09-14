const ESQUERDA_DIREITA = 1;
const DIREITA_ESQUERDA = 2;
const CIMA_BAIXO = 3;
const BAIXO_CIMA = 4;

const WIDTH_ICON = 37;
const HEIGHT_ICON = 85;

var iconAtual = [0, 0];
var iconWidth;
var iconHeight;
var sentidoAtual = ESQUERDA_DIREITA;

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

window.addEventListener("load", (e) => {
    const icon = [
        'fa-solid fa-door-closed',
        'fa-solid fa-mobile-screen',
        'fa-solid fa-building',
        'fa-solid fa-hammer',
        'fa-solid fa-key',
        "fa-solid fa-car",
        "fa-solid fa-truck",
        "fa-solid fa-display",
        "fa-solid fa-car",
        "fa-solid fa-house-circle-check",
        "fa-solid fa-heart",
        "fa-solid fa-mobile-screen",
        "fa-solid fa-truck",
    ]
    // const icon = document.getElementById("fundoAnimado").innerHTML;


    iconWidth = Math.floor(window.innerWidth / WIDTH_ICON) - 1;
    iconHeight = Math.floor(window.innerHeight / HEIGHT_ICON);
    let htmlFinal = '';


    for (let j = 0; j < iconHeight; j++) {
        htmlFinal += '<div class="row-icon">';
        let iconAnterior;
        let iconRandom;
        for (let i = 0; i < iconWidth; i++) {
            do {
                iconRandom = Math.floor(Math.random() * icon.length)

            } while (iconAnterior == iconRandom);
            iconAnterior = iconRandom
            htmlFinal += "<i class='" + icon[iconRandom] + "' id='" + iconName(j, i) + "'></i>";
        }
        htmlFinal += '</div>';
    }
    document.getElementById("fundoAnimado").innerHTML = htmlFinal;
    document.getElementById(iconName(iconAtual[0], iconAtual[1])).classList.toggle('hover');

    setInterval(simulaMouse, 100);
});


function simulaMouse() {
    toggleClass();
    iconAtual = sorteio();

    toggleClass();

}

function sorteio() {
    let sentidoSorteado;
    let x = iconAtual[0];
    let y = iconAtual[1];
    let move;

    do {
        sentidoSorteado = Math.ceil(Math.random() * 8);
        if (sentidoSorteado == ESQUERDA_DIREITA && sentidoAtual == DIREITA_ESQUERDA) {
            move = false
        } else if (sentidoSorteado == DIREITA_ESQUERDA && sentidoAtual == ESQUERDA_DIREITA) {
            move = false
        } else if (sentidoSorteado == CIMA_BAIXO && sentidoAtual == BAIXO_CIMA) {
            move = false
        } else if (sentidoSorteado == BAIXO_CIMA && sentidoAtual == CIMA_BAIXO) {
            move = false
        } else if (y == 0 && (sentidoSorteado == BAIXO_CIMA || sentidoSorteado > 4)) {
            move = false
        } else if (y == (iconWidth - 1) && (sentidoSorteado == CIMA_BAIXO || sentidoSorteado > 4)) {
            move = false
        } else if (x == 0 && (sentidoSorteado == DIREITA_ESQUERDA || sentidoSorteado > 4)) {
            move = false
        } else if (x == (iconHeight - 1) && (sentidoSorteado == ESQUERDA_DIREITA || sentidoSorteado > 4)) {
            move = false
        } else if (sentidoSorteado > 4) {
            sentidoSorteado = sentidoAtual;
            move = true;
        } else {
            move = true;
        }
    } while (!move);

    if (sentidoSorteado == ESQUERDA_DIREITA) {
        x++;
    } else if (sentidoSorteado == DIREITA_ESQUERDA) {
        x--;
    } else if (sentidoSorteado == CIMA_BAIXO) {
        y++;
    } else if (sentidoSorteado == BAIXO_CIMA) {
        y--;
    }
    sentidoAtual = sentidoSorteado;
    let ret = [x, y];
    return ret;
}

function toggleClass() {
    let icon = document.getElementById(iconName(iconAtual[0], iconAtual[1]));
    icon.classList.toggle('hover');
}

function iconName(x, y) {
    return 'icon_' + y + '_' + x;
}




