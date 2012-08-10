define(['jcx/DisplayObjectContainer'], function(DisplayObjectContainer){

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

		DisplayObjectContainer.call(this);
        this.x = x;
        this.y = y;
	}

	Sprite.prototype = new DisplayObjectContainer(0, 0);
	
	Sprite.prototype._isInBounds = function(x, y) {
		return this._isInBoundsTester.call(this, x, y);
	};

	//@override
	Sprite.prototype.draw = function() {
		this._renderer(this.jcx);
		DisplayObjectContainer.prototype.draw.call(this);
	};
	
    return Sprite;
});
