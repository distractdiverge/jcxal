(function(){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function Sprite(context, x, y) {
		var _x, _y, _width, _height, _color;

		_x = x;
		_y = y;

		_width = 100;
		_height = 100;

		_color = "#FFFFFF";

		Object.defineProperties(this,
		{
			context: {
				value: context,
				writable: false,
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
			},
			color: {
				get: function() { return _width; },
				set: function(value) { 
					_color = value; 
					this.draw(); 
				},
				configurable:false,
				enumerable:false
			},
			width: {
				get: function() { return _width; },
				set: function(value) { 
					_width = value; 
					this.draw(); 
				},
				configurable:false,
				enumerable:false
			},
			height: {
				get: function() { return _height; },
				set: function(value) { 
					_height = value; 
					this.draw(); 
				},
				configurable:false,
				enumerable:false
			}
		});


	}

	Sprite.prototype = {
		draw: function() {
			this.context.moveTo(this.x, this.y);

			// perform drawing logic

			jcx.drawSquare(this.context, this.x, this.y, this.width, this.height, this.color);
		},
		notifyClick: function(e) {
			if( e.x >= this.x && e.y >= this.y ) {
				if( (e.x <= this.x + this.width) && (e.y <= this.y + this.height)) {

					// Click was inside bounds
					this.onclick(new JCXEvent("click", this));

				}
			}
		},
		onclick: function(e) {
			// do nothing
		}
	};


	window.Sprite = Sprite;
}());