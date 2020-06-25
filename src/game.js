import Hook from "./hook";
import Background from './background';
import Fish from './fish';
export default class GonFishing {
  
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.fishes = [];
    this.handleStart();
    this.restart();
  };

  animate() {
    // this.background.animate(this.ctx);
    this.hook.animate(this.ctx);
    this.fishes.forEach((fish) => {
      fish.animate(this.ctx);
    })
    this.drawScore();
    this.runaway();
    this.caught();

    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    };
  };

  restart() {
    this.background = new Background(this.dimensions);
    this.hook = new Hook(this.dimensions);

    for (let i = 0; i < 15; i++) {
      this.fishes.push(new Fish(this.dimensions, 'small'))
    }
    // this.smallFishOne = new Fish(this.dimensions, 'small');
    // this.smallFishTwo = new Fish(this.dimensions, 'small');
    // this.smallFishThree = new Fish(this.dimensions, 'small');
    // this.fishes.push(this.smallFishOne);
    // this.fishes.push(this.smallFishTwo);
    // this.fishes.push(this.smallFishThree);
    this.score = 0;
    this.running = false;
    this.animate();
  };

  runaway() {
    this.fishes.forEach((fish) => {
      if (fish.caught(this.hook.runaway())) {
        // console.log('gettin close!')
        
        if (this.hook.xVel > 0) {
          fish.xVel = 3;
        } else {
          fish.xVel = -3;
        }

        if (this.hook.yVel > 0) {
          fish.yVel = 3;
        } else {
          fish.yVel = -3;
        }
        // fish.yVel *= -1;
        
      }
    })
  }

  caught() {
    this.fishes.forEach((fish) => {
      if (fish.caught(this.hook.hitbox()) && this.hook.map['reeling']) {
        if (Math.random() > 0.1) {
          fish.xVel = this.hook.xVel;
          fish.yVel = this.hook.yVel;
          if (fish.pos.top < 15) {
            this.fishes.splice(this.fishes.indexOf(fish),1)
            this.score += 50;
          }
        } else {
          fish.xVel = -3.5;
          fish.yVel = 3.5;
          console.log('aw snap fish let go')
        }
        
      }
    })
    // this.smallFishOne.caught(this.hook.hitbox())
    // this.smallFishTwo.caught(this.hook.hitbox())
    // this.smallFishThree.caught(this.hook.hitbox())
    
  }

  start() {
    let start = document.getElementById('start');
    let gonwelcome = document.getElementById('gonwelcome');
    let header = document.getElementById('header');
    start.style = 'display: none;'
    gonwelcome.style = 'display: none;'
    header.classList.add('move')
    this.running = true;
    // this.music();
    this.animate();
  };

  // click() {
  //   if (this.running) {
  //     this.bird.flap()
  //   } else {
  //     this.play();
  //   }
  // };

  handleStart() {
    let start = document.getElementById('start');
    start.addEventListener("mousedown", this.start.bind(this));
  }

  // drawScoreBackground() {
  //   let score = document.getElementById('score');
  //   const loc = { x: this.dimensions.width - 100, y: 50 }
  //   score.fillRect(loc.x, loc.y, 10, 10)
  //   score.fillStyle("black")
  // }

  drawScore() {
    const loc = { x: this.dimensions.width -100 , y: 50 }
    this.ctx.font = "30pt Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, loc.x, loc.y);
    // this.ctx.strokeStyle = "transparent";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }

  timer() {
    var sec = 30;
    var timer = setInterval(()=>{
      document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  music() {
    let arbw = document.getElementById('ARBW');
    arbw.volume = 0.1;
    arbw.play();
  }

}