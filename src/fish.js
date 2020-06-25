const CONSTANTS = {
  SMALL_FISH_WIDTH: 33,
  SMALL_FISH_HEIGHT: 24.5,
  LARGE_FISH_WIDTH: 80,
  LARGE_FISH_WIDTH: 40,
};

export default class Fish {
  // how to randomize fish movement, should i structure it as an array of fish or pass in size and
  // hold many instances of fish in my game class
  constructor(dimensions, size) {
    this.dimensions = dimensions;
    this.size = size;

    if (this.size === 'small') {
      this.xVel = this.newRandomVel();
      this.yVel = this.newRandomVel();
      this.pos = this.randomFish(this.size)


      const fishes = document.querySelectorAll('img');
      let randSmall = Math.floor(Math.random()*3)
      switch (randSmall) {
        case 0:
          this.moveleft = fishes[0];
          this.moveright = fishes[1];
          break;
        case 1:
          this.moveleft = fishes[2];
          this.moveright = fishes[3];
          break;
       case 2:
          this.moveleft = fishes[4];
          this.moveright = fishes[5];
         break;
      }
    }

    this.randMoveCB = this.randMoveCB.bind(this);
    this.newRandomVel = this.newRandomVel.bind(this);
    this.randBetween10002000 = this.randBetween10002000.bind(this);

    setTimeout(this.randMoveCB, this.randBetween10002000());
  }

  randomFish(size) {
    let randomX = Math.floor(Math.random() * (this.dimensions.width-200)) + 100;
    let randomY = Math.floor(Math.random() * (this.dimensions.height-200)) + 100;

    let fish = {};
    if (size === 'small') {
      fish = {
          left: randomX,
          right: randomX + CONSTANTS.SMALL_FISH_WIDTH,
          top: randomY,
          bottom: randomY + CONSTANTS.SMALL_FISH_HEIGHT
        }
    }
    return fish;
  }
  
  animate(ctx) {
    this.moveFish();
    this.drawFish(ctx);
  }
     
  newRandomVel() {
    if (Math.random() > 0.5) {
      return Math.random() * 2;
    } else {
      return Math.random() * -2;
    }
  }
      
  randBetween10002000() {
    return (Math.floor(Math.random() * 2) + 1) * 1000
  }

  randMoveCB() {
    this.xVel = this.newRandomVel();
    this.yVel = this.newRandomVel();
    setTimeout(this.randMoveCB, this.randBetween10002000())
  }
  


  
  moveFish() {
        this.pos.left += this.xVel;
        this.pos.right += this.xVel;
        this.pos.top += this.yVel;
        this.pos.bottom += this.yVel;

  
    if (this.pos.right >= (this.dimensions.width + 50) || this.pos.left <= -50) {
      this.xVel *= -1
    } 

    if (this.pos.bottom >= (this.dimensions.height + 50) || this.pos.top <= -50) {
      this.yVel *= -1
    }
  }
  
  drawFish(ctx) {
      if (this.xVel < 0) {
        ctx.drawImage(this.moveleft, this.pos.left, this.pos.top, CONSTANTS.SMALL_FISH_WIDTH, CONSTANTS.SMALL_FISH_HEIGHT);
      } else {
        ctx.drawImage(this.moveright, this.pos.left, this.pos.top, CONSTANTS.SMALL_FISH_WIDTH, CONSTANTS.SMALL_FISH_HEIGHT);
      }
  }
  

  caught(hook) {
    const _overlap = (fish, hook) => {
      if (fish.left > hook.right || fish.right < hook.left) {
        return false;
      }
      if (fish.top > hook.bottom || fish.bottom < hook.top) {
        return false;
      }
      return true;
    };

    let collision = false;
    if ( 
      _overlap(this.pos, hook)
    ) { 
      collision = true;
    }

    return collision;
  }
}


