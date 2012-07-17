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

			// todo: move to stage
			canvas = document.getElementById("theCanvas");
			context = canvas.getContext("2d");

			setupCanvasStyles(canvas, document);

			var stage = new DisplayObjectContainer(context, 0, 0);
			// end todo

			var sprite = new Sprite(context, 10, 10, function(context){
				context.drawSquare(0, 0, 100, "#FFF", "#FF0000");
			});
			sprite.onclick = function(e) {
				e.source.x *= 2;
				console.log("Sprite 1 was clicked : " + e.source.x + ", " + e.source.y);
			};
			stage.addChild(sprite);

			var sprite2 = new Sprite(context, 120, 10, function(context) {
				context.drawSquare(0, 0, 100, "#FFF", "#00FF00");
				context.drawSquare(10, 10, 20, "#333", "#00FF00");
				context.drawSquare(20, 20, 20, "#333", "#00FF00");
				context.drawSquare(30, 30, 20, "#333", "#00FF00");
			});
			sprite2.onclick = function(e) {
				console.log("Sprite 2 was clicked : " + e.source.x + ", " + e.source.y);
			};
			stage.addChild(sprite2); 

			stage.draw(); // todo: move to stage object

			canvas.onclick = function(e) { // todo move to stage object
				stage.notifyClick(e);
			}
		}

	};

}());

window.onload = window.app.init;