window.app = (function(){

	function testSquare(context) {
		jcx.drawSquare(context, 10, 10, 100, "#FFF");
		jcx.drawSquare(context, 120, 10, 100, "#FFF","#EEE");
		jcx.drawSquare(context, 230, 10, 100, "#FF3333","#FFCCCC");
	}

	function setupCanvasStyles(canvas, document) {
		canvas.width = document.width;
		canvas.height = document.height;

		canvas.style.width = canvas.width;
		canvas.style.height = canvas.height;
		canvas.style.backgroundColor = "#333333";
	}

	return {
		init: function() {
			var canvas, context, displayObjects, i, len;

			canvas = document.getElementById("theCanvas");
			context = canvas.getContext("2d");

			setupCanvasStyles(canvas, document);

			testSquare(context);

			displayObjects = [];// TODO: Move display objects to sprite

			var sprite = new Sprite(context, 200, 200);
			sprite.onclick = function(e) {
				console.log("Sprite 1 was clicked : " + e.source.x + ", " + e.source.y);
			};
			displayObjects.push(sprite);

			var sprite2 = new Sprite(context, 400, 400);
			sprite2.onclick = function(e) {
				console.log("Sprite 2 was clicked : " + e.source.x + ", " + e.source.y);
			};
			displayObjects.push(sprite2); 


			for(i = 0, len = displayObjects.length; i < len; i++) {
				displayObjects[i].draw();
			}

			// notify observers that click event occured
			canvas.onclick = function(e) {
				for(i = 0, len = displayObjects.length; i < len; i++) {
					displayObjects[i].notifyClick(e);
				}
			}
		}

	};

}());

window.onload = window.app.init;