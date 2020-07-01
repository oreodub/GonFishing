export default class Hook {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.y = this.dimensions.height / 2;
        this.x = this.dimensions.width / 2;
        this.yVel = 0;
        this.xVel = 0;
        this.map = {};

        this.keyup();
        this.keydown();
    }

    drawHook(ctx) {
        let hook = document.getElementById('hook');
        ctx.drawImage(hook, this.x, this.y, 10, 30);
    }

    drawLine(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, 1, -700)
    }

    animate(ctx) {
        this.move();
        this.drawHook(ctx);
        this.drawLine(ctx);
    }

    moveRight() {
        this.xVel += 0.5;
        if (this.xVel > 5) {
            this.xVel = 5;
        }
    }

    moveLeft() {
        this.xVel -= 0.5;
        if (this.xVel < -5) {
            this.xVel = -5;
        }
    }

    moveDown() {
        this.yVel += 0.25;
        if (this.yVel > 5) {
            this.yVel = 5;
        }
    }

    moveUp() {
        this.yVel -= 0.25;
        if (this.yVel < -5) {
            this.yVel = -5;
        }
    }
    
    decelerateY() {
        if (this.yVel > 0) {
            this.yVel -= 0.05;
        } else if (this.yVel < 0) {
            this.yVel += 0.05;
        }
    }

    decelerateX() {
        if (this.xVel > 0) {
            this.xVel -= 0.05;
        } else if (this.xVel < 0) {
            this.xVel += 0.05;
        }
    }

    move() {
        if (this.y <= -25) {
            this.y = -25;
        } else if (this.y >= this.dimensions.height - 15) {
            this.y = this.dimensions.height - 15;
        }

        if ((this.map[87] || this.map[38]) && (this.map[83] || this.map[40])) {
            this.yVel = 0;
        } else if (this.map[87] || this.map[38]) {
            this.moveUp();
        } else if (this.map[83] || this.map[40]) {
            this.moveDown();
        } else {
            this.decelerateY();
        }
        
        if (this.x > this.dimensions.width - 20) {
            this.x = this.dimensions.width - 20;
        } else if (this.x < 10) {
            this.x = 10;
        }
        
        if ((this.map[65] || this.map[37]) && (this.map[68] || this.map[39])) {
            this.xVel = 0;
        } else if (this.map[65] || this.map[37]) {
            this.moveLeft();
        } else if (this.map[68] || this.map[39]) {
            this.moveRight();
        } else {
            this.decelerateX();
        }

        if (this.map[32]) {
            this.reel();
        } else {
            this.map['reeling'] = false;
            this.decelerateY();
        }


        this.y += this.yVel;
        this.x += this.xVel;
    }

    reel() {
        this.yVel = -8;
        this.map['reeling'] = true;

    }

    keydown() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 87 || e.keyCode === 38) {
                this.map[e.keyCode] = true;
                // this.moveUp();
            } else if (e.keyCode === 83 || e.keyCode === 40) {
                this.map[e.keyCode] = true;
                // this.moveDown();
            } else if (e.keyCode === 68 || e.keyCode === 39) {
                this.map[e.keyCode] = true;
                // this.moveRight();
            } else if (e.keyCode === 65 || e.keyCode === 37) {
                this.map[e.keyCode] = true;
                // this.moveLeft();
            } else if (e.keyCode === 32) {
                this.map[e.keyCode] = true;
            }
        });
    }

    keyup() {
        document.addEventListener('keyup', (e) => {
            this.map[e.keyCode] = false;
        })
    }


    hitbox() {
        return {
            left: this.x,
            right: this.x + 10,
            top: this.y + 10,
            bottom: this.y + 30
        };
    }

    runaway() {
        return {
            left: this.x - 10,
            right: this.x + 20,
            top: this.y - 10,
            bottom: this.y + 50
        };
    }
}