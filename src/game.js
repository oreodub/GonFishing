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
    this.background.animate(this.ctx);
    this.hook.animate(this.ctx);
    this.fishes.forEach((fish) => {
      fish.animate(this.ctx);
    })
    this.drawScore();
    this.caught();

    if (this.running) {
      requestAnimationFrame(this.animate.bind(this));
    };
  };

  restart() {
    this.background = new Background(this.dimensions);
    this.hook = new Hook(this.dimensions);
    this.smallFishOne = new Fish(this.dimensions, 'small');
    this.smallFishTwo = new Fish(this.dimensions, 'small');
    this.smallFishThree = new Fish(this.dimensions, 'small');
    this.fishes.push(this.smallFishOne);
    this.fishes.push(this.smallFishTwo);
    this.fishes.push(this.smallFishThree);
    this.score = 0;
    this.running = false;
    this.animate();
  };

  caught() {
    
    this.fishes.forEach((fish) => {
      if (fish.caught(this.hook.hitbox())) {
        console.log(`caught ${fish.size} fish`)
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
    // this.score ++;
    const loc = { x: this.dimensions.width -100 , y: 50 }
    this.ctx.font = "30pt Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokeStyle = "blue";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }

  music() {
    let arbw = document.getElementById('ARBW');
    arbw.volume = 0.1;
    arbw.play();
  }

}