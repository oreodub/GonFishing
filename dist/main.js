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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GonFishing = /*#__PURE__*/function () {
  function GonFishing(canvas) {
    _classCallCheck(this, GonFishing);

    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.handleStart();
    this.restart();
  }

  _createClass(GonFishing, [{
    key: "animate",
    value: function animate() {
      this.hook.animate(this.dimensions);

      if (this.running) {
        requestAnimationFrame(this.animate.bind(this));
      }

      ;
    }
  }, {
    key: "restart",
    value: function restart() {
      this.hook = new _hook__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions);
      this.running = false;
      this.animate();
    }
  }, {
    key: "play",
    value: function play() {
      this.running = true;
      this.animate();
    }
  }, {
    key: "click",
    value: function click() {
      if (this.running) {// this.bird.flap()
      } else {
        this.play();
      }
    }
  }, {
    key: "handleStart",
    value: function handleStart() {
      this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
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
  }

  _createClass(Hook, [{
    key: "drawHook",
    value: function drawHook(ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, 10, 10);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      // this.move();
      this.drawHook(ctx);
    }
  }, {
    key: "hitbox",
    value: function hitbox() {
      return {
        left: this.x,
        right: this.x + 10,
        top: this.y,
        bottom: this.y + 10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIl0sIm5hbWVzIjpbIkdvbkZpc2hpbmciLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIndpZHRoIiwiaGVpZ2h0IiwiaGFuZGxlU3RhcnQiLCJyZXN0YXJ0IiwiaG9vayIsImFuaW1hdGUiLCJydW5uaW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIkhvb2siLCJwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrIiwieSIsIngiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdIb29rIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7SUFDcUJBLFU7QUFFbkIsc0JBQVlDLE1BQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0MsR0FBTCxHQUFXRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWDtBQUNBLFNBQUtDLFVBQUwsR0FBa0I7QUFBRUMsV0FBSyxFQUFFSixNQUFNLENBQUNJLEtBQWhCO0FBQXVCQyxZQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7QUFBdEMsS0FBbEI7QUFDQSxTQUFLQyxXQUFMO0FBQ0EsU0FBS0MsT0FBTDtBQUNEOzs7OzhCQUVTO0FBQ1IsV0FBS0MsSUFBTCxDQUFVQyxPQUFWLENBQWtCLEtBQUtOLFVBQXZCOztBQUNBLFVBQUksS0FBS08sT0FBVCxFQUFrQjtBQUNoQkMsNkJBQXFCLENBQUMsS0FBS0YsT0FBTCxDQUFhRyxJQUFiLENBQWtCLElBQWxCLENBQUQsQ0FBckI7QUFDRDs7QUFBQTtBQUNGOzs7OEJBRVM7QUFDUixXQUFLSixJQUFMLEdBQVksSUFBSUssNkNBQUosQ0FBUyxLQUFLVixVQUFkLENBQVo7QUFDQSxXQUFLTyxPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUtELE9BQUw7QUFDRDs7OzJCQUVNO0FBQ0wsV0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLRCxPQUFMO0FBQ0Q7Ozs0QkFFTztBQUNOLFVBQUksS0FBS0MsT0FBVCxFQUFrQixDQUNoQjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtJLElBQUw7QUFDRDtBQUNGOzs7a0NBRWE7QUFDWixXQUFLYixHQUFMLENBQVNELE1BQVQsQ0FBZ0JlLGdCQUFoQixDQUFpQyxXQUFqQyxFQUE4QyxLQUFLQyxLQUFMLENBQVdKLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBOUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0Q2tCQyxJO0FBRWpCLGdCQUFZVixVQUFaLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS2MsQ0FBTCxHQUFTLEtBQUtkLFVBQUwsQ0FBZ0JFLE1BQWhCLEdBQXlCLENBQWxDO0FBQ0EsU0FBS2EsQ0FBTCxHQUFTLEtBQUtmLFVBQUwsQ0FBZ0JDLEtBQWhCLEdBQXdCLENBQWpDO0FBQ0g7Ozs7NkJBRVFILEcsRUFBSztBQUNWQSxTQUFHLENBQUNrQixTQUFKLEdBQWdCLEtBQWhCO0FBQ0FsQixTQUFHLENBQUNtQixRQUFKLENBQWEsS0FBS0YsQ0FBbEIsRUFBcUIsS0FBS0QsQ0FBMUIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakM7QUFDSDs7OzRCQUVPaEIsRyxFQUFLO0FBQ1Q7QUFDQSxXQUFLb0IsUUFBTCxDQUFjcEIsR0FBZDtBQUNIOzs7NkJBRVE7QUFDTCxhQUFPO0FBQ0hxQixZQUFJLEVBQUUsS0FBS0osQ0FEUjtBQUVISyxhQUFLLEVBQUUsS0FBS0wsQ0FBTCxHQUFTLEVBRmI7QUFHSE0sV0FBRyxFQUFFLEtBQUtQLENBSFA7QUFJSFEsY0FBTSxFQUFFLEtBQUtSLENBQUwsR0FBUztBQUpkLE9BQVA7QUFNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1qQixNQUFNLEdBQUcwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQUk1Qiw2Q0FBSixDQUFlQyxNQUFmLEU7Ozs7Ozs7Ozs7O0FDSkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvb2sgZnJvbSBcIi4vaG9va1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29uRmlzaGluZyB7XG4gIFxuICBjb25zdHJ1Y3RvcihjYW52YXMpe1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgIHRoaXMuaGFuZGxlU3RhcnQoKTtcbiAgICB0aGlzLnJlc3RhcnQoKTtcbiAgfTtcblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMuaG9vay5hbmltYXRlKHRoaXMuZGltZW5zaW9ucyk7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICB9O1xuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5ob29rID0gbmV3IEhvb2sodGhpcy5kaW1lbnNpb25zKTtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfTtcblxuICBwbGF5KCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH07XG5cbiAgY2xpY2soKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgLy8gdGhpcy5iaXJkLmZsYXAoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlU3RhcnQoKSB7XG4gICAgdGhpcy5jdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5jbGljay5iaW5kKHRoaXMpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvb2sge1xuXG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5kaW1lbnNpb25zLndpZHRoIC8gMjtcbiAgICB9XG5cbiAgICBkcmF3SG9vayhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgMTAsIDEwKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKGN0eCkge1xuICAgICAgICAvLyB0aGlzLm1vdmUoKTtcbiAgICAgICAgdGhpcy5kcmF3SG9vayhjdHgpO1xuICAgIH1cblxuICAgIGhpdGJveCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMueCxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnggKyAxMCxcbiAgICAgICAgICAgIHRvcDogdGhpcy55LFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnkgKyAxMFxuICAgICAgICB9O1xuICAgIH1cblxufSIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuaW1wb3J0IEdvbkZpc2hpbmcgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xubmV3IEdvbkZpc2hpbmcoY2FudmFzKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9