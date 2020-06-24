const CONSTANTS = {
  SMALL_FISH_WIDTH: 33,
  SMALL_FISH_HEIGHT: 24.5,
  SMALL_FISH_SPEED: 2,
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
      this.xVel = CONSTANTS.SMALL_FISH_SPEED;
      this.yVel = CONSTANTS.SMALL_FISH_SPEED;
      this.fish = this.randomFish(this.size)
    }

    this.randMoveCB = this.randMoveCB.bind(this);
    this.newRandomVel = this.newRandomVel.bind(this);
    this.randBetween10002000 = this.randBetween10002000.bind(this);

    setTimeout(this.randMoveCB, this.randBetween10002000());
  }

  randomFish(size) {
    let randomX = Math.floor(Math.random() * this.dimensions.width-10)+10;
    let randomY = Math.floor(Math.random() * this.dimensions.height-10)+10;
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
        this.fish.left += this.xVel;
        this.fish.right += this.xVel;
        this.fish.top += this.yVel;
        this.fish.bottom += this.yVel;
      // } else {
        // fish.left -= CONSTANTS.SMALL_FISH_SPEED
      // }
      
    // });
  
    // if (this.fish[0].right >= this.dimensions.width) {
    //   this.fish.shift();
    //   // const newX = this.fish[1].left;
    //   this.fish.push(this.randomFish());
    // }
    if (this.fish.right >= this.dimensions.width || this.fish.left <= 0) {
      // this.fish = this.randomFish();
      this.xVel *= -1
    } 

    if (this.fish.bottom >= this.dimensions.height || this.fish.top <= 0) {
      this.yVel *= -1
    }
  }
  
  drawFish(ctx) {
    // this.eachFish(function (fish) {
      // let fish = new Image();
      // debugger
      // fish.src = './images/smallfish.png'
      // fish.onload = () => {
      //   ctx.drawImage(fish, this.fish.left, this.fish.top)
      // }
      const smallfishleft = document.getElementById("smallfishleft");
      const smallfishright = document.getElementById("smallfishright");
      if (this.xVel < 0) {
        ctx.drawImage(smallfishleft, this.fish.left, this.fish.top, CONSTANTS.SMALL_FISH_WIDTH, CONSTANTS.SMALL_FISH_HEIGHT);
      } else {
        ctx.drawImage(smallfishright, this.fish.left, this.fish.top, CONSTANTS.SMALL_FISH_WIDTH, CONSTANTS.SMALL_FISH_HEIGHT);
      }
     

    // drawImage(img, 100, 100); // just draw it 
    // drawImage(img, 100, 100, 200, 50); // draw it with width/height specified
    // drawImage(img, 100, 100, 200, 50, 45); // draw it at 45 degrees
    // drawImage(img, 100, 100, 200, 50, 0, true); // draw it flipped
    // drawImage(img, 100, 100, 200, 50, 0, false, true); // draw it flopped
    // drawImage(img, 100, 100, 200, 50, 0, true, true); // draw it flipflopped
    // drawImage(img, 100, 100, 200, 50, 45, true, true, true); // draw it flipflopped and 45 degrees rotated around the center of the image :-)
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
      _overlap(this.fish, hook)
    ) { 
      collision = true;
    }

    return collision;
  }
}


