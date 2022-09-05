const grid = document.querySelector('.grid');
const timer = document.querySelector('.timer');
const timerInitial = 60;

timer.innerText = timerInitial;

const imagens = [
  'branco_fundo_branco',
  'porta-externa-pormade-pvc-wood-wpc1p-branca',
  'porta-externa-pormade-pvc-wood-wpc1p-curupixa',
  'preto-09',
  'porta-externa-pormade-pvc-wood-wpc1p-preta',
  'Boutique Acetinado Nero',
  'Boutique Halftone',
  'Dupla Laqueada',
  'Freijó Frizzatta',
  'Pivotante Tabaco Frizzatta',
]

const characters = [
  
]

while(characters.length < 6) {
  const random = Math.floor(Math.random()* imagens.length)
  if(!characters.includes(imagens[random])){
    characters.push(imagens[random]);  
  }
}

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 12) {
    clearInterval(this.loop);
    setTimeout(() => {
      class Progress {
        constructor(param = {}) {
          this.timestamp        = null;
          this.duration         = param.duration || Progress.CONST.DURATION;
          this.progress         = 0;
          this.delta            = 0;
          this.progress         = 0;
          this.isLoop           = !!param.isLoop;
      
          this.reset();
        }
      
        static get CONST() {
          return {
            DURATION : 1000
          };
        }
      
        reset() {
          this.timestamp = null;
        }
      
        start(now) {
          this.timestamp = now;
        }
      
        tick(now) {
          if (this.timestamp) {
            this.delta    = now - this.timestamp;
            this.progress = Math.min(this.delta / this.duration, 1);
      
            if (this.progress >= 1 && this.isLoop) {
              this.start(now);
            }
      
            return this.progress;
          } else {
            return 0;
          }
        }
      }
      
      class Confetti {
        constructor(param) {
          this.parent         = param.elm || document.body;
          this.canvas         = document.createElement("canvas");
          this.ctx            = this.canvas.getContext("2d");
          this.width          = param.width  || this.parent.offsetWidth;
          this.height         = param.height || this.parent.offsetHeight;
          this.length         = param.length || Confetti.CONST.PAPER_LENGTH;
          this.yRange         = param.yRange || this.height * 2;
          this.progress       = new Progress({
            duration : param.duration,
            isLoop   : true
          });
          this.rotationRange  = typeof param.rotationLength === "number" ? param.rotationRange: 10;
          this.speedRange     = typeof param.speedRange     === "number" ? param.speedRange: 10;
          this.sprites        = [];
      
          this.canvas.style.cssText = [
            "display: block",
            "position: absolute",
            "top: 0",
            "left: 0",
            "pointer-events: none"
          ].join(";");
      
          this.render = this.render.bind(this);
      
          this.build();
      
          this.parent.appendChild(this.canvas);
          this.progress.start(performance.now());
      
          requestAnimationFrame(this.render);
        }
      
        static get CONST() {
          return {
              SPRITE_WIDTH  : 9,
              SPRITE_HEIGHT : 16,
              PAPER_LENGTH  : 100,
              DURATION      : 8000,
              ROTATION_RATE : 50,
              COLORS        : [
                "#EF5350",
                "#EC407A",
                "#AB47BC",
                "#7E57C2",
                "#5C6BC0",
                "#42A5F5",
                "#29B6F6",
                "#26C6DA",
                "#26A69A",
                "#66BB6A",
                "#9CCC65",
                "#D4E157",
                "#FFEE58",
                "#FFCA28",
                "#FFA726",
                "#FF7043",
                "#8D6E63",
                "#BDBDBD",
                "#78909C"
              ]
          };
        }
      
        build() {
          for (let i = 0; i < this.length; ++i) {
            let canvas = document.createElement("canvas"),
                ctx    = canvas.getContext("2d");
      
            canvas.width  = Confetti.CONST.SPRITE_WIDTH;
            canvas.height = Confetti.CONST.SPRITE_HEIGHT;
      
            canvas.position = {
              initX : Math.random() * this.width,
              initY : -canvas.height - Math.random() * this.yRange
            };
      
            canvas.rotation = (this.rotationRange / 2) - Math.random() * this.rotationRange;
            canvas.speed    = (this.speedRange / 2) + Math.random() * (this.speedRange / 2);
      
            ctx.save();
              ctx.fillStyle = Confetti.CONST.COLORS[(Math.random() * Confetti.CONST.COLORS.length) | 0];
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.restore();
      
            this.sprites.push(canvas);
          }
        }
      
        render(now) {
          let progress = this.progress.tick(now);
      
          this.canvas.width  = this.width;
          this.canvas.height = this.height;
      
          for (let i = 0; i < this.length; ++i) {
            this.ctx.save();
              this.ctx.translate(
                this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
                this.sprites[i].position.initY + progress * (this.height + this.yRange)
              );
              this.ctx.rotate(this.sprites[i].rotation);
              this.ctx.drawImage(
                this.sprites[i],
                -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
                -Confetti.CONST.SPRITE_HEIGHT / 2,
                Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
                Confetti.CONST.SPRITE_HEIGHT
              );
            this.ctx.restore();
          }
      
          requestAnimationFrame(this.render);
        }
      }
      
      (() => {
        const DURATION = 8000,
              LENGTH   = 120;
      
        new Confetti({
          width    : window.innerWidth,
          height   : window.innerHeight,
          length   : LENGTH,
          duration : DURATION
        });
      
        setTimeout(() => {
          new Confetti({
            width    : window.innerWidth,
            height   : window.innerHeight,
            length   : LENGTH,
            duration : DURATION
          });
        }, DURATION / 2);
      })();
      setTimeout(() =>{
        Swal.fire(
          'Parabéns!',
          'Você ganhou o brinde',
          'success'
          
        )},500, setTimeout(function() {
          window.location.replace("/index.html");
      }, 3000));

    
    },500);
    
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({target}) =>{
  if(target.parentNode.className.includes("reveal-card")){
      return;
  }
  if(firstCard == "" && !target.parentNode.className.includes("grid")){
      target.parentNode.classList.add("reveal-card");
      firstCard = target.parentNode;
      // console.log(target.parentNode)
  }else if(secondCard === "" && !target.parentNode.className.includes("grid")){
      target.parentNode.classList.add("reveal-card");
      secondCard = target.parentNode;
      // console.log(target.parentNode)

      checkCards();
  }
}

const createCard = (characters) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${characters}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.setAttribute('data-character', characters);

  return card;
}

const loadGame = () => {

  const duplicateCharacters = [ ...characters, ...characters ];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((characters) => {
    const card = createCard(characters);
    grid.appendChild(card);
  });
}

const revealAllCards = () => {
  let allCards = document.querySelectorAll('.card')
  if (timer.innerText == 60){
    allCards.forEach(element => {
      element.classList.add('reveal-card')
      element.removeEventListener('click', revealCard)
    });
  }
  if(timer.innerText==58){
    console.log('a')
    allCards.forEach(element => {
      element.classList.remove('reveal-card')
      element.addEventListener('click', revealCard)
    });
  }
  
}

const disableAllCard = () => {
  let allCards = document.querySelectorAll('.card')

  allCards.forEach(element => {
    element.removeEventListener('click', revealCard)
  });
  
}

const startTimer = () => {

  this.loop = setInterval(() => {
    let currentTime = +timer.innerText;
    currentTime--;


    revealAllCards()
    if (currentTime==0){
      clearInterval(this.loop)
        //exibir uma mensagem de perdeu playboy
        Swal.fire({
          icon: 'error',
          title: 'Você Perdeu',
          text: 'Tente Novamente',
        })
        disableAllCard();
        //desabilitar cartas
        setTimeout(function() {
          window.location.replace("/InitialScreenGames/index.html");
      }, 2000); 
    }

    timer.innerText = currentTime;
  }, 1000);
}

window.onload = () => {
  startTimer();
  loadGame();
}
