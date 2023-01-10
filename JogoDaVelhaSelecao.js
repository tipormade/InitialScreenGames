
document.getElementById('counterTicTac').addEventListener('click', function (e) {
    e.preventDefault();
    Swal.fire({
      title: 'Qual modo de jogo deseja jogar?',
      text: 'Selecione o modo de jogo do jogo da velha!',
      icon: 'question',
      showCancelButton: true,
      popup: 'animate__backOutDown',
      confirmButtonColor: '#509d45',
      cancelButtonColor: '#024053',
      confirmButtonText: '1 pessoa',
      cancelButtonText: '2 pessoas',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('Jogo-Da-Velha-Main/index.html');
      } else {
        window.location.replace('TwoPlayers/index.html');
      }
    });
});