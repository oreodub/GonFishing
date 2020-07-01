const CONSTANTS = {
  SMALL_FISH_WIDTH: 33,
  SMALL_FISH_HEIGHT: 24.5,
  BIG_FISH_WIDTH: 100,
  BIG_FISH_HEIGHT: 90,
  SHARK_WIDTH: 60,
  SHARK_HEIGHT: 50
};

export default class Fish {
  constructor(dimensions, size) {
    this.dimensions = dimensions;
    this.size = size;
    this.xVel = this.newRandomVel();
    this.yVel = this.newRandomVel();
    this.pos = this.randomPos(size)

    const fishes = Array.from(document.querySelectorAll('img')).slice(5);
    if (size === 'small') {
      let randSmall = Math.floor(Math.random()*5)
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
        case 3:
          this.moveleft = fishes[6];
          this.moveright = fishes[7];
          break;
        case 4:
          this.moveleft = fishes[8];
          this.moveright = fishes[9];
          break;
      }
    } else if (size === 'big') {
        this.moveleft = fishes[12];
        this.moveright = fishes[13];
    } else if (size === 'shark') {
      this.moveleft = fishes[10];
      this.moveright = fishes[11];
    }

    this.randMoveCB = this.randMoveCB.bind(this);
    this.newRandomVel = this.newRandomVel.bind(this);
    this.randBetween10002000 = this.randBetween10002000.bind(this);

    setTimeout(this.randMoveCB, this.randBetween10002000());
  }

  randomPos(size) {
    let randomX = Math.floor(Math.random() * (this.dimensions.width-200)) + 100;
    let randomY = Math.floor(Math.random() * (this.dimensions.height-200)) + 100;

    let pos = { left: randomX, top: randomY };
    if (size === 'small') {
      pos.right = randomX + CONSTANTS.SMALL_FISH_WIDTH;
      pos.bottom = randomY + CONSTANTS.SMALL_FISH_HEIGHT;
    } else if (size === 'big') {
      pos.right = randomX + CONSTANTS.BIG_FISH_WIDTH;
      pos.bottom = randomY + CONSTANTS.BIG_FISH_HEIGHT;
    } else if (size === 'shark') {
      pos.right = randomX + CONSTANTS.SHARK_WIDTH;
      pos.bottom = randomY + CONSTANTS.SHARK_HEIGHT;
    }
    return pos;
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
  
    if (this.pos.right >= (this.dimensions.width + 100) || this.pos.left <= -100) {
      this.xVel *= -1
    } 
    if (this.pos.bottom >= (this.dimensions.height + 90) || this.pos.top <= 0) {
      this.yVel *= -1
    }
  }
  
  drawFish(ctx) {
    let width, height;
    if (this.size === 'small') {
      width = CONSTANTS.SMALL_FISH_WIDTH;
      height = CONSTANTS.SMALL_FISH_HEIGHT;
    } else if (this.size === 'big') {
      width = CONSTANTS.BIG_FISH_WIDTH;
      height = CONSTANTS.BIG_FISH_HEIGHT;
    } else if (this.size === 'shark') {
      width = CONSTANTS.SHARK_WIDTH;
      height = CONSTANTS.SHARK_HEIGHT;
    }
      if (this.xVel < 0) {
        ctx.drawImage(this.moveleft, this.pos.left, this.pos.top, width, height);
      } else {
        ctx.drawImage(this.moveright, this.pos.left, this.pos.top, width, height);
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


