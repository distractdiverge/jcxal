(function(){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function Sprite(context, x, y, renderer) {

		Object.defineProperties(this,
		{
			_renderer : {
				value: renderer,
				writable: false,
				configurable: false,
				enumerable: false
			}
		});


		DisplayObject.call(this, context, x, y);
	}

	Sprite.prototype = new DisplayObject();
	
	//@override
	Sprite.prototype.draw = function() {
		DisplayObject.prototype.draw.call(this);
		this._renderer.call(this, this.jcx);
	};
	
	Sprite.prototype.onclick = function(e) {
		// do nothing
	};

	window.Sprite = Sprite;
}());