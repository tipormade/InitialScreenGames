var videoResultado = document.getElementById("video");
var resultado = document.getElementById("resultado");
setTimeout(() => {
    anjo();
}, 10000);


function anjo(){
    alterarVideo('../colorido.mp4');
    exibirResultado();
}
function lider(){
    alterarVideo('../mov_bbb.mp4');
    exibirResultado();
}
function alterarVideo(src){
    let source = document.createElement('source');
    source.setAttribute('src', src);
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);
}
function exibirResultado(){
    resultado.style.visibility = 'visible';
    videoResultado.play();

}
