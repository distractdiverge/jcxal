define(['jcx/DisplayObject'], function(DisplayObject){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function Sprite(x, y, renderer, isInBoundsTester) {

		if( typeof(renderer) !== "function" ) {
			throw new Error("renderer must be a function");
		}

		if( typeof(isInBoundsTester) !== "function" ) {
			throw new Error("isInBoundsTester must be a function");
		}

		Object.defineProperties(this,
		{
			_renderer : {
				value: renderer,
				writable: false,
				configurable: false,
				enumerable: false
			},
			_isInBoundsTester : {
				value : isInBoundsTester,
				writable: false,
				configurable : false,
				enumerable : false
			}
		});


		DisplayObject.call(this, x, y);
	}

	Sprite.prototype = new DisplayObject(0, 0);
	
	Sprite.prototype._isInBounds = function(x, y) {
		return this._isInBoundsTester.call(this, x, y);
	};

	//@override
	Sprite.prototype.draw = function() {
		DisplayObject.prototype.draw.call(this);
		this._renderer(this.jcx);
	};
	
    return Sprite;
});
