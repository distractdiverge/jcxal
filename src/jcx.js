(function() {

	"use strict";

 	//define([],function(){

 		// a wrapper for normal html5 canvas context to allow relative coordinate space
 		function JCX(context, x, y) {

 			var _x, _y;

 			_x = x;
 			_y = y;

 			Object.defineProperties(this,
 			{
 				_innerContext : {
 					value: context,
 					writable: false,
 					configurable: false,
 					enumerable: false
 				},
 				xOffset: {
 					get: function() { return _x; },
 					set: function(value) { _x = value; },
 					configurable: false
 				},
 				yOffset: {
 					get: function() { return _y; },
 					set: function(value) { _y = value; },
 					configurable: false
 				}
 			});
 		}

 		JCX.prototype = {
 			drawRectangle: function(x, y, width, height, color, fillColor) {
 				if( fillColor ) {
 					this._innerContext.fillStyle = fillColor;
 					this._innerContext.fillRect(this.xOffset+x, this.yOffset+y, width, height);
 				} 

				this._innerContext.strokeStyle = color;
 				this._innerContext.strokeRect(this.xOffset+x, this.yOffset+y, width, height);
 			},

 			drawSquare: function(x, y, size, color, fillColor) {
				this.drawRectangle(x, y, size, size, color, fillColor);
 			},

 			drawCircle: function(x, y, radius, color, fillColor) {
				
 				if( fillColor ) {
 					this._innerContext.fillStyle = fillColor;
 					this._innerContext.arc(this.xOffset+x, this.yOffset+y, radius, 0, 360);
 					this._innerContext.fill();
 				}

				this._innerContext.strokeStyle = color;
 				this._innerContext.stroke();
 			}

 		};

 		window.JCX = JCX;
})();