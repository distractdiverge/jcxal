window.jcx = (function() {

	"use strict";


 	//define([],function(){


 		function _drawRectangle(context, x, y, width, height, color, fillColor) {
 				if( fillColor ) {
 					context.fillStyle = fillColor;
 					context.fillRect(x, y, width, height);
 				} 

				context.strokeStyle = color;
 				context.strokeRect(x, y, width, height);
 		}

 		return {

 			drawRectangle: function(context, x, y, width, height, color, fillColor) {
 				_drawRectangle(context, x, y, width, height, color, fillColor);
 			},

 			drawSquare: function(context, x, y, size, color, fillColor) {
				_drawRectangle(context, x, y, size, size, color, fillColor);
 			},
 			drawCircle: function(context, x, y, radius, color, fillColor) {
				
 				if( fillColor ) {
 					context.fillStyle = fillColor;
 					context.arc(x, y, radius, 0, 360);
 					context.fill();
 				}

				context.strokeStyle = color;
 				context.stroke();
 			}

 		};
})();