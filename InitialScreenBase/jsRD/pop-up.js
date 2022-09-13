let togglebtn = document.querySelector('.togglebtn')
let popup = document.querySelector('.popup')
let btnclose = document.querySelector('.btn-close')

togglebtn.onclick = function(){
    popup.classList.toggle('active')
 //   togglebtn.classList.toggle('togglebtn')
    togglebtn.classList.toggle('button-hidden')
}

btnclose.onclick = function(){
    togglebtn.click();
}


