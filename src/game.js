import Hook from "./hook";
import Fish from './fish';
export default class GonFishing {
  
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.handleStart();
    this.restart();
  };

  animate() {
    this.hook.animate(this.ctx);
    this.fishes.forEach((fish) => { 
      fish.animate(this.ctx);
    })

    if (this.bigfish) {
      this.bigfish.animate(this.ctx);
    }

    this.shark.animate(this.ctx);
    
    this.drawScore();
    this.runaway();
    this.caught();
    if (this.running) {
      this.playMusic();
      requestAnimationFrame(this.animate.bind(this));
    };
  };

  restart() {
    this.hook = new Hook(this.dimensions);
    this.fishes = [];
    for (let i = 0; i < 17; i++) {
      this.fishes.push(new Fish(this.dimensions, 'small'))
    }
    this.bigfish = new Fish(this.dimensions, 'big');
    this.shark = new Fish(this.dimensions, 'shark');
    this.score = 0;
    this.running = false;
    this.animate();
  };

  runaway() {
    const hook = this.hook.runaway();
    this.fishes.forEach((fish) => {
      if (fish.caught(hook)) {
        
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

    const shark = this.shark.pos;
    if (this.shark.caught(hook)) {
      if (hook.left < shark.left) {
        this.shark.xVel = -4;
      } else if (hook.right > shark.right) {
        this.shark.xVel = 4;
      }

      if (hook.top < shark.top) {
        this.shark.yVel = -4;
      } else if (hook.bottom > shark.bottom) {
        this.shark.yVel = 4;
      }
    }
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
          fish.yVel = 3.5;
        }
      }
    })

    if (this.bigfish) {
      if (this.bigfish.caught(this.hook.hitbox()) && this.hook.map['reeling']) {
        
        if (Math.random() > 0.25) {
          this.bigfish.xVel = this.hook.xVel;
          this.bigfish.yVel = this.hook.yVel;
          if (this.bigfish.pos.bottom < 35) {
            this.bigfish = false;
            this.score += 500;
          }
        } else {
          this.bigfish.yVel = 5;
        }
      }
    }

    if (this.shark.caught(this.hook.hitbox())) {
      this.hook.xVel = this.shark.xVel;
      this.hook.yVel = this.shark.yVel;
    }
  }

  start() {
    let gonwelcome = document.getElementById('gonwelcome');
    let header = document.getElementById('header');
    let splash = document.getElementById('splash');
    let restart = document.getElementsByClassName('restart-container')[0];
    splash.style = 'display: none;'
    gonwelcome.style = 'display: none;'
    restart.style = 'display: none;'
    header.classList.add('move')
    header.classList.remove('header-animation')
    document.getElementById('restart').style = 'z-index: -10;'
    this.running = true;
    
    this.animate();
    this.timer()
  };

  handleStart() {
    const start = document.getElementById('start');
    const restart = document.getElementById('restart');
    start.addEventListener("mousedown", this.start.bind(this));
    restart.addEventListener("mousedown", 
    ()=> {
      this.restart(); 
      this.start();
    });
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
    timer.innerHTML = 60;
    let sec = 60;
    const incrementer = setInterval(()=>{
      timer.innerHTML = sec;
      sec--;
      if (sec < 5) {
        timer.classList.add('red');
      }
      if (sec < 0) {
        this.running = false;
        timer.style = 'display: none;'
        document.getElementsByClassName('restart-container')[0].style = 'display: flex;'
        document.getElementById('restart').style = 'z-index: 10;'
        document.getElementById('score').innerHTML = this.score;
        this.pauseMusic();
        clearInterval(incrementer);
      } 
    }, 1000);
  }


  playMusic() {
    const arbw = document.getElementById('ARBW');
    arbw.volume = 0.1;
    arbw.play();
  }

  pauseMusic() {
    const arbw = document.getElementById('ARBW');
    arbw.pause();
  }
}