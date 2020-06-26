import Hook from "./hook";
// import Background from './background';
import Fish from './fish';
export default class GonFishing {
  
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.fishes = [];
    this.bigfish = new Fish(this.dimensions, 'big');
    this.handleStart();
    this.restart();
  };

  animate() {
    // this.background.animate(this.ctx);
    this.hook.animate(this.ctx);
    this.fishes.forEach((fish) => {
      fish.animate(this.ctx);
    })
    if (this.score < 100) {
      this.bigfish.pos.left = 500;
      this.bigfish.pos.top = 700;
    } 
    this.bigfish.animate(this.ctx);
    
    this.drawScore();
    this.runaway();
    this.caught();
    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    };
  };

  restart() {
    // this.background = new Background(this.dimensions);
    this.hook = new Hook(this.dimensions);

    for (let i = 0; i < 15; i++) {
      this.fishes.push(new Fish(this.dimensions, 'small'))
    }
    this.score = 0;
    this.running = false;
    this.animate();
  };

  runaway() {
    this.fishes.forEach((fish) => {
      if (fish.caught(this.hook.runaway())) {
        
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
        }
        
      }
    })
    
  }

  start() {
    let start = document.getElementById('start');
    let gonwelcome = document.getElementById('gonwelcome');
    let header = document.getElementById('header');
    start.style = 'display: none;'
    gonwelcome.style = 'display: none;'
    header.classList.add('move')
    header.classList.remove('header-animation')
    this.running = true;
    // this.music();
    this.animate();
    this.timer()
  };

  handleStart() {
    let start = document.getElementById('start');
    start.addEventListener("mousedown", this.start.bind(this));
  }

  drawScore() {
    const loc = { x: this.dimensions.width -100 , y: 50 }
    this.ctx.font = "30pt Times";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }

  timer() {
    const timer = document.getElementById('timer');
    timer.style = 'display: block;';
    
    let sec = 60;
    const incrementer = setInterval(()=>{
      timer.innerHTML = sec;
      sec--;
      if (sec < 5) {
        timer.classList.add('red');
      }
      if (sec < 0) {
        this.running = false;
        clearInterval(incrementer);
      } 
    }, 1000);
  }


  music() {
    const arbw = document.getElementById('ARBW');
    arbw.volume = 0.1;
    arbw.play();
  }

}