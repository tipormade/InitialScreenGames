document.getElementById('counterTicTac').addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire({
    
      title: 'Selecione o modo de Jogo!',
      width: 700,
      padding: '5em',
      color: '#716add',
      background: '#fff ',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
});