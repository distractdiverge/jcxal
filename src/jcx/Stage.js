// A canvas wrapper for object drawing
(function(){

	// using jcx.js

	function Stage(canvas) {

		DisplayObjectContainer.call(this, 0, 0);

		// ensure the width/height is correct
		canvas.style.width = canvas.width;
		canvas.style.height = canvas.height;

        this.context = canvas.getContext("2d");	

        this.jcx = new JCX(this._context,0,0);

		// setup click handler
		var that = this;
		canvas.onclick = function(e) {
			that.notifyClick(e);
		};

		// immediately draw the canvas
		DisplayObjectContainer.prototype.draw.call(this); 
	}
	
	Stage.prototype = new DisplayObjectContainer(0, 0);

	Stage.prototype._isInBounds = function(x, y) { return true; };

	window.Stage = Stage;
}());
