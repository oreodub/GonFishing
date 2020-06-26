/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fish.js":
/*!*********************!*\
  !*** ./src/fish.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fish; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  SMALL_FISH_WIDTH: 33,
  SMALL_FISH_HEIGHT: 24.5,
  BIG_FISH_WIDTH: 100,
  BIG_FISH_HEIGHT: 90
};

var Fish = /*#__PURE__*/function () {
  function Fish(dimensions, size) {
    _classCallCheck(this, Fish);

    this.dimensions = dimensions;
    this.size = size;
    this.xVel = this.newRandomVel();
    this.yVel = this.newRandomVel();
    this.pos = this.randomPos(size);
    var fishes = Array.from(document.querySelectorAll('img')).slice(5);

    if (size === 'small') {
      var randSmall = Math.floor(Math.random() * 5);

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
    }

    this.randMoveCB = this.randMoveCB.bind(this);
    this.newRandomVel = this.newRandomVel.bind(this);
    this.randBetween10002000 = this.randBetween10002000.bind(this);
    setTimeout(this.randMoveCB, this.randBetween10002000());
  }

  _createClass(Fish, [{
    key: "randomPos",
    value: function randomPos(size) {
      var randomX = Math.floor(Math.random() * (this.dimensions.width - 200)) + 100;
      var randomY = Math.floor(Math.random() * (this.dimensions.height - 200)) + 100;
      var pos = {
        left: randomX,
        top: randomY
      };

      if (size === 'small') {
        pos.right = randomX + CONSTANTS.SMALL_FISH_WIDTH;
        pos.bottom = randomY + CONSTANTS.SMALL_FISH_HEIGHT;
      } else if (size === 'big') {
        pos.right = randomX + CONSTANTS.BIG_FISH_WIDTH;
        pos.bottom = randomY + CONSTANTS.BIG_FISH_HEIGHT;
      }

      return pos;
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.moveFish();
      this.drawFish(ctx);
    }
  }, {
    key: "newRandomVel",
    value: function newRandomVel() {
      if (Math.random() > 0.5) {
        return Math.random() * 2;
      } else {
        return Math.random() * -2;
      }
    }
  }, {
    key: "randBetween10002000",
    value: function randBetween10002000() {
      return (Math.floor(Math.random() * 2) + 1) * 1000;
    }
  }, {
    key: "randMoveCB",
    value: function randMoveCB() {
      this.xVel = this.newRandomVel();
      this.yVel = this.newRandomVel();
      setTimeout(this.randMoveCB, this.randBetween10002000());
    }
  }, {
    key: "moveFish",
    value: function moveFish() {
      this.pos.left += this.xVel;
      this.pos.right += this.xVel;
      this.pos.top += this.yVel;
      this.pos.bottom += this.yVel;

      if (this.pos.right >= this.dimensions.width + 100 || this.pos.left <= -100) {
        this.xVel *= -1;
      }

      if (this.pos.bottom >= this.dimensions.height + 90 || this.pos.top <= 0) {
        this.yVel *= -1;
      }
    }
  }, {
    key: "drawFish",
    value: function drawFish(ctx) {
      var width, height;

      if (this.size === 'small') {
        width = CONSTANTS.SMALL_FISH_WIDTH;
        height = CONSTANTS.SMALL_FISH_HEIGHT;
      } else if (this.size === 'big') {
        width = CONSTANTS.BIG_FISH_WIDTH;
        height = CONSTANTS.BIG_FISH_HEIGHT;
      }

      if (this.xVel < 0) {
        ctx.drawImage(this.moveleft, this.pos.left, this.pos.top, width, height);
      } else {
        ctx.drawImage(this.moveright, this.pos.left, this.pos.top, width, height);
      }
    }
  }, {
    key: "caught",
    value: function caught(hook) {
      var _overlap = function _overlap(fish, hook) {
        if (fish.left > hook.right || fish.right < hook.left) {
          return false;
        }

        if (fish.top > hook.bottom || fish.bottom < hook.top) {
          return false;
        }

        return true;
      };

      var collision = false;

      if (_overlap(this.pos, hook)) {
        collision = true;
      }

      return collision;
    }
  }]);

  return Fish;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GonFishing; });
/* harmony import */ var _hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hook */ "./src/hook.js");
/* harmony import */ var _fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fish */ "./src/fish.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // import Background from './background';



var GonFishing = /*#__PURE__*/function () {
  function GonFishing(canvas) {
    _classCallCheck(this, GonFishing);

    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.fishes = [];
    this.bigfish = new _fish__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions, 'big');
    this.handleStart();
    this.restart();
  }

  _createClass(GonFishing, [{
    key: "animate",
    value: function animate() {
      var _this = this;

      // this.background.animate(this.ctx);
      this.hook.animate(this.ctx);
      this.fishes.forEach(function (fish) {
        fish.animate(_this.ctx);
      }); // if (this.score < 50) {
      //   this.bigfish.pos.left = 500;
      //   this.bigfish.pos.top = 700;
      // }

      if (this.bigfish) {
        this.bigfish.animate(this.ctx);
      } // this.hook.yVel = 0;


      this.drawScore();
      this.runaway();
      this.caught();

      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }

      ;
    }
  }, {
    key: "restart",
    value: function restart() {
      // this.background = new Background(this.dimensions);
      this.hook = new _hook__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);

      for (var i = 0; i < 17; i++) {
        this.fishes.push(new _fish__WEBPACK_IMPORTED_MODULE_1__["default"](this.dimensions, 'small'));
      }

      this.score = 0;
      this.running = false;
      this.animate();
    }
  }, {
    key: "runaway",
    value: function runaway() {
      var _this2 = this;

      this.fishes.forEach(function (fish) {
        if (fish.caught(_this2.hook.runaway())) {
          if (_this2.hook.xVel > 0) {
            fish.xVel = 3;
          } else {
            fish.xVel = -3;
          }

          if (_this2.hook.yVel > 0) {
            fish.yVel = 3;
          } else {
            fish.yVel = -3;
          }
        }
      });
    }
  }, {
    key: "caught",
    value: function caught() {
      var _this3 = this;

      this.fishes.forEach(function (fish) {
        if (fish.caught(_this3.hook.hitbox()) && _this3.hook.map['reeling']) {
          if (Math.random() > 0.1) {
            fish.xVel = _this3.hook.xVel;
            fish.yVel = _this3.hook.yVel;

            if (fish.pos.top < 15) {
              _this3.fishes.splice(_this3.fishes.indexOf(fish), 1);

              _this3.score += 50;
            }
          } else {
            fish.yVel = 3.5;
          }
        }
      });

      if (this.bigfish) {
        if (this.bigfish.caught(this.hook.hitbox()) && this.hook.map['reeling']) {
          if (Math.random() > 0.5) {
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
    }
  }, {
    key: "start",
    value: function start() {
      var gonwelcome = document.getElementById('gonwelcome');
      var header = document.getElementById('header');
      var splash = document.getElementById('splash');
      splash.style = 'display: none;';
      gonwelcome.style = 'display: none;';
      header.classList.add('move');
      header.classList.remove('header-animation');
      this.running = true;
      this.music();
      this.animate();
      this.timer();
    }
  }, {
    key: "handleStart",
    value: function handleStart() {
      var start = document.getElementById('start');
      start.addEventListener("mousedown", this.start.bind(this));
    }
  }, {
    key: "drawScore",
    value: function drawScore() {
      var loc = {
        x: this.dimensions.width - 100,
        y: 50
      };
      this.ctx.font = "30pt Times";
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.score, loc.x, loc.y);
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 1;
      this.ctx.strokeText(this.score, loc.x, loc.y);
    }
  }, {
    key: "timer",
    value: function timer() {
      var _this4 = this;

      var timer = document.getElementById('timer');
      timer.style = 'display: block;';
      var sec = 60;
      var incrementer = setInterval(function () {
        timer.innerHTML = sec;
        sec--;

        if (sec < 5) {
          timer.classList.add('red');
        }

        if (sec < 0) {
          _this4.running = false;
          clearInterval(incrementer);
        }
      }, 1000);
    }
  }, {
    key: "music",
    value: function music() {
      var arbw = document.getElementById('ARBW');
      arbw.volume = 0.1;
      arbw.play();
    }
  }]);

  return GonFishing;
}();



/***/ }),

/***/ "./src/hook.js":
/*!*********************!*\
  !*** ./src/hook.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hook; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Hook = /*#__PURE__*/function () {
  function Hook(dimensions) {
    _classCallCheck(this, Hook);

    this.dimensions = dimensions;
    this.y = this.dimensions.height / 2;
    this.x = this.dimensions.width / 2;
    this.yVel = 0;
    this.xVel = 0;
    this.map = {};
    this.keyup();
    this.keydown();
  }

  _createClass(Hook, [{
    key: "drawHook",
    value: function drawHook(ctx) {
      var hook = document.getElementById('hook');
      ctx.drawImage(hook, this.x, this.y, 10, 30);
    }
  }, {
    key: "drawLine",
    value: function drawLine(ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(this.x, this.y, 1, -700);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.move();
      this.drawHook(ctx);
      this.drawLine(ctx);
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.xVel += 0.5;

      if (this.xVel > 5) {
        this.xVel = 5;
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.xVel -= 0.5;

      if (this.xVel < -5) {
        this.xVel = -5;
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      this.yVel += 0.25;

      if (this.yVel > 5) {
        this.yVel = 5;
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      this.yVel -= 0.25;

      if (this.yVel < -5) {
        this.yVel = -5;
      }
    }
  }, {
    key: "decelerateY",
    value: function decelerateY() {
      if (this.yVel > 0) {
        this.yVel -= 0.05;
      } else if (this.yVel < 0) {
        this.yVel += 0.05;
      }
    }
  }, {
    key: "decelerateX",
    value: function decelerateX() {
      if (this.xVel > 0) {
        this.xVel -= 0.05;
      } else if (this.xVel < 0) {
        this.xVel += 0.05;
      }
    }
  }, {
    key: "move",
    value: function move() {
      if (this.y <= -10) {
        this.y = -10;
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
  }, {
    key: "reel",
    value: function reel() {
      this.yVel = -8;
      this.map['reeling'] = true;
    }
  }, {
    key: "keydown",
    value: function keydown() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        if (e.keyCode === 87 || e.keyCode === 38) {
          _this.map[e.keyCode] = true; // this.moveUp();
        } else if (e.keyCode === 83 || e.keyCode === 40) {
          _this.map[e.keyCode] = true; // this.moveDown();
        } else if (e.keyCode === 68 || e.keyCode === 39) {
          _this.map[e.keyCode] = true; // this.moveRight();
        } else if (e.keyCode === 65 || e.keyCode === 37) {
          _this.map[e.keyCode] = true; // this.moveLeft();
        } else if (e.keyCode === 32) {
          _this.map[e.keyCode] = true;
        }
      });
    }
  }, {
    key: "keyup",
    value: function keyup() {
      var _this2 = this;

      document.addEventListener('keyup', function (e) {
        _this2.map[e.keyCode] = false;
      });
    }
  }, {
    key: "hitbox",
    value: function hitbox() {
      return {
        left: this.x,
        right: this.x + 10,
        top: this.y + 10,
        bottom: this.y + 30
      };
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return {
        left: this.x - 10,
        right: this.x + 20,
        top: this.y - 10,
        bottom: this.y + 50
      };
    }
  }]);

  return Hook;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


var canvas = document.getElementById('canvas');
new _game__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Zpc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzgwNjYiXSwibmFtZXMiOlsiQ09OU1RBTlRTIiwiU01BTExfRklTSF9XSURUSCIsIlNNQUxMX0ZJU0hfSEVJR0hUIiwiQklHX0ZJU0hfV0lEVEgiLCJCSUdfRklTSF9IRUlHSFQiLCJGaXNoIiwiZGltZW5zaW9ucyIsInNpemUiLCJ4VmVsIiwibmV3UmFuZG9tVmVsIiwieVZlbCIsInBvcyIsInJhbmRvbVBvcyIsImZpc2hlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNsaWNlIiwicmFuZFNtYWxsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibW92ZWxlZnQiLCJtb3ZlcmlnaHQiLCJyYW5kTW92ZUNCIiwiYmluZCIsInJhbmRCZXR3ZWVuMTAwMDIwMDAiLCJzZXRUaW1lb3V0IiwicmFuZG9tWCIsIndpZHRoIiwicmFuZG9tWSIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImN0eCIsIm1vdmVGaXNoIiwiZHJhd0Zpc2giLCJkcmF3SW1hZ2UiLCJob29rIiwiX292ZXJsYXAiLCJmaXNoIiwiY29sbGlzaW9uIiwiR29uRmlzaGluZyIsImNhbnZhcyIsImdldENvbnRleHQiLCJiaWdmaXNoIiwiaGFuZGxlU3RhcnQiLCJyZXN0YXJ0IiwiYW5pbWF0ZSIsImZvckVhY2giLCJkcmF3U2NvcmUiLCJydW5hd2F5IiwiY2F1Z2h0IiwicnVubmluZyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkhvb2siLCJpIiwicHVzaCIsInNjb3JlIiwiaGl0Ym94IiwibWFwIiwic3BsaWNlIiwiaW5kZXhPZiIsImdvbndlbGNvbWUiLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlciIsInNwbGFzaCIsInN0eWxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwibXVzaWMiLCJ0aW1lciIsInN0YXJ0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxvYyIsIngiLCJ5IiwiZm9udCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VUZXh0Iiwic2VjIiwiaW5jcmVtZW50ZXIiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImNsZWFySW50ZXJ2YWwiLCJhcmJ3Iiwidm9sdW1lIiwicGxheSIsImtleXVwIiwia2V5ZG93biIsImZpbGxSZWN0IiwibW92ZSIsImRyYXdIb29rIiwiZHJhd0xpbmUiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImRlY2VsZXJhdGVZIiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJkZWNlbGVyYXRlWCIsInJlZWwiLCJlIiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVB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QXNCLElBQXRCO0FBQ0g7QUFDSixPQWhCRDtBQWlCSDs7OzRCQUVPO0FBQUE7O0FBQ0o3RixjQUFRLENBQUM2RCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDK0IsQ0FBRCxFQUFPO0FBQ3RDLGNBQUksQ0FBQzdDLEdBQUwsQ0FBUzZDLENBQUMsQ0FBQ0MsT0FBWCxJQUFzQixLQUF0QjtBQUNILE9BRkQ7QUFHSDs7OzZCQUdRO0FBQ0wsYUFBTztBQUNINUUsWUFBSSxFQUFFLEtBQUs4QyxDQURSO0FBRUg1QyxhQUFLLEVBQUUsS0FBSzRDLENBQUwsR0FBUyxFQUZiO0FBR0g3QyxXQUFHLEVBQUUsS0FBSzhDLENBQUwsR0FBUyxFQUhYO0FBSUg1QyxjQUFNLEVBQUUsS0FBSzRDLENBQUwsR0FBUztBQUpkLE9BQVA7QUFNSDs7OzhCQUVTO0FBQ04sYUFBTztBQUNIL0MsWUFBSSxFQUFFLEtBQUs4QyxDQUFMLEdBQVMsRUFEWjtBQUVINUMsYUFBSyxFQUFFLEtBQUs0QyxDQUFMLEdBQVMsRUFGYjtBQUdIN0MsV0FBRyxFQUFFLEtBQUs4QyxDQUFMLEdBQVMsRUFIWDtBQUlINUMsY0FBTSxFQUFFLEtBQUs0QyxDQUFMLEdBQVM7QUFKZCxPQUFQO0FBTUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNbEMsTUFBTSxHQUFHOUIsUUFBUSxDQUFDbUQsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsSUFBSXRCLDZDQUFKLENBQWVDLE1BQWYsRTs7Ozs7Ozs7Ozs7QUNKQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBDT05TVEFOVFMgPSB7XG4gIFNNQUxMX0ZJU0hfV0lEVEg6IDMzLFxuICBTTUFMTF9GSVNIX0hFSUdIVDogMjQuNSxcbiAgQklHX0ZJU0hfV0lEVEg6IDEwMCxcbiAgQklHX0ZJU0hfSEVJR0hUOiA5MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2gge1xuICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zLCBzaXplKSB7XG4gICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcbiAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgIHRoaXMueFZlbCA9IHRoaXMubmV3UmFuZG9tVmVsKCk7XG4gICAgdGhpcy55VmVsID0gdGhpcy5uZXdSYW5kb21WZWwoKTtcbiAgICB0aGlzLnBvcyA9IHRoaXMucmFuZG9tUG9zKHNpemUpXG5cbiAgICBjb25zdCBmaXNoZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpKS5zbGljZSg1KTtcbiAgICBpZiAoc2l6ZSA9PT0gJ3NtYWxsJykge1xuICAgICAgbGV0IHJhbmRTbWFsbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KVxuICAgICAgc3dpdGNoIChyYW5kU21hbGwpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHRoaXMubW92ZWxlZnQgPSBmaXNoZXNbMF07XG4gICAgICAgICAgdGhpcy5tb3ZlcmlnaHQgPSBmaXNoZXNbMV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICB0aGlzLm1vdmVsZWZ0ID0gZmlzaGVzWzJdO1xuICAgICAgICAgIHRoaXMubW92ZXJpZ2h0ID0gZmlzaGVzWzNdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgdGhpcy5tb3ZlbGVmdCA9IGZpc2hlc1s0XTtcbiAgICAgICAgICB0aGlzLm1vdmVyaWdodCA9IGZpc2hlc1s1XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHRoaXMubW92ZWxlZnQgPSBmaXNoZXNbNl07XG4gICAgICAgICAgdGhpcy5tb3ZlcmlnaHQgPSBmaXNoZXNbN107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICB0aGlzLm1vdmVsZWZ0ID0gZmlzaGVzWzhdO1xuICAgICAgICAgIHRoaXMubW92ZXJpZ2h0ID0gZmlzaGVzWzldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2l6ZSA9PT0gJ2JpZycpIHtcbiAgICAgICAgdGhpcy5tb3ZlbGVmdCA9IGZpc2hlc1sxMl07XG4gICAgICAgIHRoaXMubW92ZXJpZ2h0ID0gZmlzaGVzWzEzXTtcbiAgICB9XG5cbiAgICB0aGlzLnJhbmRNb3ZlQ0IgPSB0aGlzLnJhbmRNb3ZlQ0IuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5ld1JhbmRvbVZlbCA9IHRoaXMubmV3UmFuZG9tVmVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yYW5kQmV0d2VlbjEwMDAyMDAwID0gdGhpcy5yYW5kQmV0d2VlbjEwMDAyMDAwLmJpbmQodGhpcyk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmFuZE1vdmVDQiwgdGhpcy5yYW5kQmV0d2VlbjEwMDAyMDAwKCkpO1xuICB9XG5cbiAgcmFuZG9tUG9zKHNpemUpIHtcbiAgICBsZXQgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmRpbWVuc2lvbnMud2lkdGgtMjAwKSkgKyAxMDA7XG4gICAgbGV0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5kaW1lbnNpb25zLmhlaWdodC0yMDApKSArIDEwMDtcblxuICAgIGxldCBwb3MgPSB7IGxlZnQ6IHJhbmRvbVgsIHRvcDogcmFuZG9tWSB9O1xuICAgIGlmIChzaXplID09PSAnc21hbGwnKSB7XG4gICAgICBwb3MucmlnaHQgPSByYW5kb21YICsgQ09OU1RBTlRTLlNNQUxMX0ZJU0hfV0lEVEg7XG4gICAgICBwb3MuYm90dG9tID0gcmFuZG9tWSArIENPTlNUQU5UUy5TTUFMTF9GSVNIX0hFSUdIVDtcbiAgICB9IGVsc2UgaWYgKHNpemUgPT09ICdiaWcnKSB7XG4gICAgICBwb3MucmlnaHQgPSByYW5kb21YICsgQ09OU1RBTlRTLkJJR19GSVNIX1dJRFRIO1xuICAgICAgcG9zLmJvdHRvbSA9IHJhbmRvbVkgKyBDT05TVEFOVFMuQklHX0ZJU0hfSEVJR0hUO1xuICAgIH1cbiAgICByZXR1cm4gcG9zO1xuICB9XG4gIFxuICBhbmltYXRlKGN0eCkge1xuICAgIHRoaXMubW92ZUZpc2goKTtcbiAgICB0aGlzLmRyYXdGaXNoKGN0eCk7XG4gIH1cbiAgICAgXG4gIG5ld1JhbmRvbVZlbCgpIHtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIC0yO1xuICAgIH1cbiAgfVxuICAgICAgXG4gIHJhbmRCZXR3ZWVuMTAwMDIwMDAoKSB7XG4gICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDEpICogMTAwMFxuICB9XG5cbiAgcmFuZE1vdmVDQigpIHtcbiAgICB0aGlzLnhWZWwgPSB0aGlzLm5ld1JhbmRvbVZlbCgpO1xuICAgIHRoaXMueVZlbCA9IHRoaXMubmV3UmFuZG9tVmVsKCk7XG4gICAgc2V0VGltZW91dCh0aGlzLnJhbmRNb3ZlQ0IsIHRoaXMucmFuZEJldHdlZW4xMDAwMjAwMCgpKVxuICB9XG4gIFxuICBtb3ZlRmlzaCgpIHtcbiAgICAgIHRoaXMucG9zLmxlZnQgKz0gdGhpcy54VmVsO1xuICAgICAgdGhpcy5wb3MucmlnaHQgKz0gdGhpcy54VmVsO1xuICAgICAgdGhpcy5wb3MudG9wICs9IHRoaXMueVZlbDtcbiAgICAgIHRoaXMucG9zLmJvdHRvbSArPSB0aGlzLnlWZWw7XG4gIFxuICAgIGlmICh0aGlzLnBvcy5yaWdodCA+PSAodGhpcy5kaW1lbnNpb25zLndpZHRoICsgMTAwKSB8fCB0aGlzLnBvcy5sZWZ0IDw9IC0xMDApIHtcbiAgICAgIHRoaXMueFZlbCAqPSAtMVxuICAgIH0gXG4gICAgaWYgKHRoaXMucG9zLmJvdHRvbSA+PSAodGhpcy5kaW1lbnNpb25zLmhlaWdodCArIDkwKSB8fCB0aGlzLnBvcy50b3AgPD0gMCkge1xuICAgICAgdGhpcy55VmVsICo9IC0xXG4gICAgfVxuICB9XG4gIFxuICBkcmF3RmlzaChjdHgpIHtcbiAgICBsZXQgd2lkdGgsIGhlaWdodDtcbiAgICBpZiAodGhpcy5zaXplID09PSAnc21hbGwnKSB7XG4gICAgICB3aWR0aCA9IENPTlNUQU5UUy5TTUFMTF9GSVNIX1dJRFRIO1xuICAgICAgaGVpZ2h0ID0gQ09OU1RBTlRTLlNNQUxMX0ZJU0hfSEVJR0hUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaXplID09PSAnYmlnJykge1xuICAgICAgd2lkdGggPSBDT05TVEFOVFMuQklHX0ZJU0hfV0lEVEg7XG4gICAgICBoZWlnaHQgPSBDT05TVEFOVFMuQklHX0ZJU0hfSEVJR0hUO1xuXG4gICAgfVxuICAgICAgaWYgKHRoaXMueFZlbCA8IDApIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm1vdmVsZWZ0LCB0aGlzLnBvcy5sZWZ0LCB0aGlzLnBvcy50b3AsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLm1vdmVyaWdodCwgdGhpcy5wb3MubGVmdCwgdGhpcy5wb3MudG9wLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIH1cbiAgfVxuICBcblxuICBjYXVnaHQoaG9vaykge1xuICAgIGNvbnN0IF9vdmVybGFwID0gKGZpc2gsIGhvb2spID0+IHtcbiAgICAgIGlmIChmaXNoLmxlZnQgPiBob29rLnJpZ2h0IHx8IGZpc2gucmlnaHQgPCBob29rLmxlZnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGZpc2gudG9wID4gaG9vay5ib3R0b20gfHwgZmlzaC5ib3R0b20gPCBob29rLnRvcCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xuICAgIGlmICggXG4gICAgICBfb3ZlcmxhcCh0aGlzLnBvcywgaG9vaylcbiAgICApIHsgXG4gICAgICBjb2xsaXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xsaXNpb247XG4gIH1cbn1cblxuXG4iLCJpbXBvcnQgSG9vayBmcm9tIFwiLi9ob29rXCI7XG4vLyBpbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xuaW1wb3J0IEZpc2ggZnJvbSAnLi9maXNoJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvbkZpc2hpbmcge1xuICBcbiAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQgfTtcbiAgICB0aGlzLmZpc2hlcyA9IFtdO1xuICAgIHRoaXMuYmlnZmlzaCA9IG5ldyBGaXNoKHRoaXMuZGltZW5zaW9ucywgJ2JpZycpO1xuICAgIHRoaXMuaGFuZGxlU3RhcnQoKTtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfTtcblxuICBhbmltYXRlKCkge1xuICAgIC8vIHRoaXMuYmFja2dyb3VuZC5hbmltYXRlKHRoaXMuY3R4KTtcbiAgICB0aGlzLmhvb2suYW5pbWF0ZSh0aGlzLmN0eCk7XG4gICAgdGhpcy5maXNoZXMuZm9yRWFjaCgoZmlzaCkgPT4ge1xuICAgICAgXG4gICAgICBmaXNoLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgIH0pXG4gICAgLy8gaWYgKHRoaXMuc2NvcmUgPCA1MCkge1xuICAgIC8vICAgdGhpcy5iaWdmaXNoLnBvcy5sZWZ0ID0gNTAwO1xuICAgIC8vICAgdGhpcy5iaWdmaXNoLnBvcy50b3AgPSA3MDA7XG4gICAgLy8gfVxuXG4gICAgaWYgKHRoaXMuYmlnZmlzaCkge1xuICAgICAgdGhpcy5iaWdmaXNoLmFuaW1hdGUodGhpcy5jdHgpO1xuICAgIH1cbiAgICAvLyB0aGlzLmhvb2sueVZlbCA9IDA7XG4gICAgXG4gICAgdGhpcy5kcmF3U2NvcmUoKTtcbiAgICB0aGlzLnJ1bmF3YXkoKTtcbiAgICB0aGlzLmNhdWdodCgpO1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfTtcbiAgfTtcblxuICByZXN0YXJ0KCkge1xuICAgIC8vIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgdGhpcy5ob29rID0gbmV3IEhvb2sodGhpcy5kaW1lbnNpb25zKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTc7IGkrKykge1xuICAgICAgdGhpcy5maXNoZXMucHVzaChuZXcgRmlzaCh0aGlzLmRpbWVuc2lvbnMsICdzbWFsbCcpKVxuICAgIH1cbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfTtcblxuICBydW5hd2F5KCkge1xuICAgIHRoaXMuZmlzaGVzLmZvckVhY2goKGZpc2gpID0+IHtcbiAgICAgIGlmIChmaXNoLmNhdWdodCh0aGlzLmhvb2sucnVuYXdheSgpKSkge1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaG9vay54VmVsID4gMCkge1xuICAgICAgICAgIGZpc2gueFZlbCA9IDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlzaC54VmVsID0gLTM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob29rLnlWZWwgPiAwKSB7XG4gICAgICAgICAgZmlzaC55VmVsID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaXNoLnlWZWwgPSAtMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBjYXVnaHQoKSB7XG4gICAgdGhpcy5maXNoZXMuZm9yRWFjaCgoZmlzaCkgPT4ge1xuICAgICAgaWYgKGZpc2guY2F1Z2h0KHRoaXMuaG9vay5oaXRib3goKSkgJiYgdGhpcy5ob29rLm1hcFsncmVlbGluZyddKSB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC4xKSB7XG4gICAgICAgICAgZmlzaC54VmVsID0gdGhpcy5ob29rLnhWZWw7XG4gICAgICAgICAgZmlzaC55VmVsID0gdGhpcy5ob29rLnlWZWw7XG4gICAgICAgICAgaWYgKGZpc2gucG9zLnRvcCA8IDE1KSB7XG4gICAgICAgICAgICB0aGlzLmZpc2hlcy5zcGxpY2UodGhpcy5maXNoZXMuaW5kZXhPZihmaXNoKSwxKVxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlzaC55VmVsID0gMy41O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmICh0aGlzLmJpZ2Zpc2gpIHtcbiAgICAgIGlmICh0aGlzLmJpZ2Zpc2guY2F1Z2h0KHRoaXMuaG9vay5oaXRib3goKSkgJiYgdGhpcy5ob29rLm1hcFsncmVlbGluZyddKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgIHRoaXMuYmlnZmlzaC54VmVsID0gdGhpcy5ob29rLnhWZWw7XG4gICAgICAgICAgdGhpcy5iaWdmaXNoLnlWZWwgPSB0aGlzLmhvb2sueVZlbDtcbiAgICAgICAgICBpZiAodGhpcy5iaWdmaXNoLnBvcy5ib3R0b20gPCAzNSkge1xuICAgICAgICAgICAgdGhpcy5iaWdmaXNoID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5iaWdmaXNoLnlWZWwgPSA1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgbGV0IGdvbndlbGNvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ29ud2VsY29tZScpO1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgbGV0IHNwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2gnKTtcbiAgICBzcGxhc2guc3R5bGUgPSAnZGlzcGxheTogbm9uZTsnXG4gICAgZ29ud2VsY29tZS5zdHlsZSA9ICdkaXNwbGF5OiBub25lOydcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW92ZScpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci1hbmltYXRpb24nKVxuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5tdXNpYygpO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIHRoaXMudGltZXIoKVxuICB9O1xuXG4gIGhhbmRsZVN0YXJ0KCkge1xuICAgIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpO1xuICAgIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5zdGFydC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGRyYXdTY29yZSgpIHtcbiAgICBjb25zdCBsb2MgPSB7IHg6IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtMTAwICwgeTogNTAgfVxuICAgIHRoaXMuY3R4LmZvbnQgPSBcIjMwcHQgVGltZXNcIjtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jdHguZmlsbFRleHQodGhpcy5zY29yZSwgbG9jLngsIGxvYy55KTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgIHRoaXMuY3R4LnN0cm9rZVRleHQodGhpcy5zY29yZSwgbG9jLngsIGxvYy55KTtcbiAgfVxuXG4gIHRpbWVyKCkge1xuICAgIGNvbnN0IHRpbWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWVyJyk7XG4gICAgdGltZXIuc3R5bGUgPSAnZGlzcGxheTogYmxvY2s7JztcbiAgICBcbiAgICBsZXQgc2VjID0gNjA7XG4gICAgY29uc3QgaW5jcmVtZW50ZXIgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgdGltZXIuaW5uZXJIVE1MID0gc2VjO1xuICAgICAgc2VjLS07XG4gICAgICBpZiAoc2VjIDwgNSkge1xuICAgICAgICB0aW1lci5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWMgPCAwKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhckludGVydmFsKGluY3JlbWVudGVyKTtcbiAgICAgIH0gXG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG4gIG11c2ljKCkge1xuICAgIGNvbnN0IGFyYncgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQVJCVycpO1xuICAgIGFyYncudm9sdW1lID0gMC4xO1xuICAgIGFyYncucGxheSgpO1xuICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb29rIHtcbiAgICBjb25zdHJ1Y3RvcihkaW1lbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyAyO1xuICAgICAgICB0aGlzLnlWZWwgPSAwO1xuICAgICAgICB0aGlzLnhWZWwgPSAwO1xuICAgICAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgICAgIHRoaXMua2V5dXAoKTtcbiAgICAgICAgdGhpcy5rZXlkb3duKCk7XG4gICAgfVxuXG4gICAgZHJhd0hvb2soY3R4KSB7XG4gICAgICAgIGxldCBob29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvb2snKTtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShob29rLCB0aGlzLngsIHRoaXMueSwgMTAsIDMwKTtcbiAgICB9XG5cbiAgICBkcmF3TGluZShjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCAxLCAtNzAwKVxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KSB7XG4gICAgICAgIHRoaXMubW92ZSgpO1xuICAgICAgICB0aGlzLmRyYXdIb29rKGN0eCk7XG4gICAgICAgIHRoaXMuZHJhd0xpbmUoY3R4KTtcbiAgICB9XG5cbiAgICBtb3ZlUmlnaHQoKSB7XG4gICAgICAgIHRoaXMueFZlbCArPSAwLjU7XG4gICAgICAgIGlmICh0aGlzLnhWZWwgPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnhWZWwgPSA1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZUxlZnQoKSB7XG4gICAgICAgIHRoaXMueFZlbCAtPSAwLjU7XG4gICAgICAgIGlmICh0aGlzLnhWZWwgPCAtNSkge1xuICAgICAgICAgICAgdGhpcy54VmVsID0gLTU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlRG93bigpIHtcbiAgICAgICAgdGhpcy55VmVsICs9IDAuMjU7XG4gICAgICAgIGlmICh0aGlzLnlWZWwgPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnlWZWwgPSA1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVVwKCkge1xuICAgICAgICB0aGlzLnlWZWwgLT0gMC4yNTtcbiAgICAgICAgaWYgKHRoaXMueVZlbCA8IC01KSB7XG4gICAgICAgICAgICB0aGlzLnlWZWwgPSAtNTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBkZWNlbGVyYXRlWSgpIHtcbiAgICAgICAgaWYgKHRoaXMueVZlbCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbCAtPSAwLjA1O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueVZlbCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMueVZlbCArPSAwLjA1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjZWxlcmF0ZVgoKSB7XG4gICAgICAgIGlmICh0aGlzLnhWZWwgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWwgLT0gMC4wNTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhWZWwgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnhWZWwgKz0gMC4wNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnkgPD0gLTEwKSB7XG4gICAgICAgICAgICB0aGlzLnkgPSAtMTA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy55ID49IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAxNSkge1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIDE1O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0aGlzLm1hcFs4N10gfHwgdGhpcy5tYXBbMzhdKSAmJiAodGhpcy5tYXBbODNdIHx8IHRoaXMubWFwWzQwXSkpIHtcbiAgICAgICAgICAgIHRoaXMueVZlbCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbODddIHx8IHRoaXMubWFwWzM4XSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVXAoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hcFs4M10gfHwgdGhpcy5tYXBbNDBdKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlY2VsZXJhdGVZKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLSAyMCkge1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoIC0gMjA7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54IDwgMTApIHtcbiAgICAgICAgICAgIHRoaXMueCA9IDEwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoKHRoaXMubWFwWzY1XSB8fCB0aGlzLm1hcFszN10pICYmICh0aGlzLm1hcFs2OF0gfHwgdGhpcy5tYXBbMzldKSkge1xuICAgICAgICAgICAgdGhpcy54VmVsID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hcFs2NV0gfHwgdGhpcy5tYXBbMzddKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXBbNjhdIHx8IHRoaXMubWFwWzM5XSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVjZWxlcmF0ZVgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm1hcFszMl0pIHtcbiAgICAgICAgICAgIHRoaXMucmVlbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXBbJ3JlZWxpbmcnXSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZWNlbGVyYXRlWSgpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnkgKz0gdGhpcy55VmVsO1xuICAgICAgICB0aGlzLnggKz0gdGhpcy54VmVsO1xuICAgIH1cblxuICAgIHJlZWwoKSB7XG4gICAgICAgIHRoaXMueVZlbCA9IC04O1xuICAgICAgICB0aGlzLm1hcFsncmVlbGluZyddID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIGtleWRvd24oKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gODcgfHwgZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZVVwKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gODMgfHwgZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMubW92ZURvd24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA2OCB8fCBlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbZS5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA2NSB8fCBlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbZS5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbZS5rZXlDb2RlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXVwKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcFtlLmtleUNvZGVdID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBoaXRib3goKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLngsXG4gICAgICAgICAgICByaWdodDogdGhpcy54ICsgMTAsXG4gICAgICAgICAgICB0b3A6IHRoaXMueSArIDEwLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnkgKyAzMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJ1bmF3YXkoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnggLSAxMCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnggKyAyMCxcbiAgICAgICAgICAgIHRvcDogdGhpcy55IC0gMTAsXG4gICAgICAgICAgICBib3R0b206IHRoaXMueSArIDUwXG4gICAgICAgIH07XG4gICAgfVxufSIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuaW1wb3J0IEdvbkZpc2hpbmcgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xubmV3IEdvbkZpc2hpbmcoY2FudmFzKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9