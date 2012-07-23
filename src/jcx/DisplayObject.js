(function(){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function DisplayObject(x, y) {
		var _x, _y;

		if( typeof(x) != "number" ) {
			throw new Error("x must be a number");
		}

		if( typeof(y) != "number" ) {
			throw new Error("y must be a number");
		}

		_x = x;
		_y = y;

		Object.defineProperties(this,
		{
			jcx: {
				value: null,
				writable: true,
				configurable: false,
				enumerable: false
			},
			x: {
				get: function() { return _x; },
				set: function(value) {
					_x = value;
					this.draw();
				},
				configurable: false,
				enumerable: false
			},
			y: {
				get: function() { return _y; },
				set: function(value) { 
					_y = value; 
					this.draw();
				},
				configurable: false,
				enumerable: false
			}
		});


	}

	DisplayObject.prototype = {
		_isInBounds: function(x, y) {
			
			// test to see if point is inbounds

			return false;
		},
		draw: function() {
			// perform drawing logic
		},
		notifyClick: function(e) {
			if( this._isInBounds(e.x, e.y) ) {
				this.onclick(new JCXEvent("click", this));
			}
		},
		onclick: function(e) {
			// do nothing
		}
	};


	window.DisplayObject = DisplayObject;
}());
