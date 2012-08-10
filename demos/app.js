define(['jcx', 'jcx/Stage', 'jcx/sprite'],function(JCX, Stage, Sprite){
	function setupCanvasStyles(canvas, document) {
		canvas.width = document.width;
		canvas.height = document.height;

		canvas.style.width = canvas.width;
		canvas.style.height = canvas.height;
		canvas.style.backgroundColor = "#333333";
	}

    function init() {
        var canvas, context, stage;

        canvas = document.getElementById("theCanvas");

        setupCanvasStyles(canvas, document);
        stage = new Stage(canvas);

        var sprite = new Sprite(10,10,function(context) {
            context.drawSquare(0, 0, 100, "#FFF", "#FF0000");
        },
        function(x,y){
            return (x >= this.x && x <= this.x+100) && (y >= this.y && y <= this.y+100);
        });
        sprite.onclick = function(e) {
            console.log("Sprite 1 was clicked : " + e.target.x + ", " + e.target.y);
        };
        stage.addChild(sprite);

        var sprite2 = new Sprite(120, 10, function(context) {
            context.drawSquare(0, 0, 100, "#FFF", "#FFFF00");
            context.drawSquare(20, 20, 20, "#333", "#00FF00");
            context.drawSquare(30, 30, 20, "#333", "#0000FF");
        },
        function(x,y){
            return (x >= this.x && x <= this.x+100) && (y >= this.y && y <= this.y+100);
        });
        sprite2.onclick = function(e) {
            console.log("Sprite 2 was clicked : " + e.target.x + ", " + e.target.y);
        };

        var sprite3 = new Sprite(10, 10, function(context){
            context.drawCircle(10,10,10, "#333","#00FFFF");
        },
        function(x,y){
            var a_squared = Math.pow(this.jcx.xOffset + this.x - x, 2);
            var b_squared = Math.pow(this.jcx.yOffset + this.y - y, 2);
            var c_squared = a_squared + b_squared;
            return c_squared < 100;
        });
        sprite3.onclick = function(e){
            console.log("Sprite 3 was clicked : " + e.target.x + ", " + e.target.y);
        };
        stage.addChild(sprite2);

        sprite2.addChild(sprite3);

        stage.draw();
	}

    window.onload = init;
    return init;
});
