(function(){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function DisplayObjectContainer(context, x, y) {
		// TODO inherit parent

		Object.defineProperties(this, 
		{
			_children: {
				value: [],
				writable: true,
				configurable: false,
				enumerable: false
			}
		});

		DisplayObject.call(this, context, x, y);
	}

	DisplayObjectContainer.prototype = new DisplayObject(null, 0, 0);	

	DisplayObjectContainer.prototype.addChild = function (item) {
		if( !(item instanceof DisplayObject) ) {
			throw new Error("Cannot add non DisplayObject");
		}

		this._children.push(item);
	};
	DisplayObjectContainer.prototype.removeItemAt = function(index){
		if( index < 0 || index >= this.children.length ) {
			throw new Error("Index out of range");
		}

		var child = this._children[index];

		delete this._children[index];

		return child;
	};
	DisplayObjectContainer.prototype.draw = function() {
		var i, len;

		DisplayObject.prototype.draw.call(this);
		
		for(i = 0, len = this._children.length; i < len; i++ ) {
			// coordinate space is relative because we called draw of container first
			this._children[i].draw();
		}
	};
	DisplayObjectContainer.prototype.notifyClick = function(evnt) {
		var i, len;

		if( this._isInBounds(evnt.x, evnt.y) ) {
		
			// delegate to children first
			for( i = 0, len = this._children.length; i < len; i++ ) {
				this._children[i].notifyClick(evnt);
			}

			// delegate to self last
			DisplayObject.prototype.notifyClick.call(this, evnt);
		}
	};

	window.DisplayObjectContainer = DisplayObjectContainer;
}());