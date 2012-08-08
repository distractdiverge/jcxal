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
			var canvas, context, stage;

			canvas = document.getElementById("theCanvas");

			setupCanvasStyles(canvas, document);
			stage = new Stage(canvas);

			var sprite = new Sprite(10, 10, function(context) {
				context.drawSquare(0, 0, 100, "#FFF", "#FF0000");
			},
			function(x,y){
				return (x >= this.x && x <= this.x+100) && (y >= this.y && y <= this.y+100);
			});
			sprite.onclick = function(e) {
				console.log("Sprite 1 was clicked : " + e.source.x + ", " + e.source.y);
			};
			stage.addChild(sprite);

			var sprite2 = new Sprite(120, 10, function(context) {
				context.drawSquare(0, 0, 100, "#FFF", "#FFFF00");
				context.drawSquare(10, 10, 20, "#333", "#FF0000");
				context.drawSquare(20, 20, 20, "#333", "#00FF00");
				context.drawSquare(30, 30, 20, "#333", "#0000FF");
			},
			function(x,y){
				return (x >= this.x && x <= this.x+100) && (y >= this.y && y <= this.y+100);
			});
			sprite2.onclick = function(e) {
				console.log("Sprite 2 was clicked : " + e.source.x + ", " + e.source.y);
			};
			stage.addChild(sprite2); 

			stage.draw();
		}

	};

}());

window.onload = window.app.init;
