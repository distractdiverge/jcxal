(function(){

	"use strict";

	// using jcx
	// using jcx/JCXEvent

	function DisplayObjectContainer(x, y) {

		Object.defineProperties(this,
		{
			_children: {
				value: [],
				writable: true,
				configurable: false,
				enumerable: false
			},
            parentContainer: {
                value:null,
                writable: true,
                configurable:false,
                enumerable:false
            },
            context:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:false
            },
            getContext: {
                value: function(){
                    if (!this.context){
                        return this.parentContainer.getContext();
                    }else{
                        return this.context;
                    }
                },
                writable:false,
                configurable:false,
                enumerable:false
            }
		});

		DisplayObject.call(this, x, y);
	}

	DisplayObjectContainer.prototype = new DisplayObject(0, 0);

	DisplayObjectContainer.prototype.addChild = function (item) {
		if( !(item instanceof DisplayObject) ) {
			throw new Error("Cannot add non DisplayObject");
		}
        item.parentContainer = this;
		this._children.push(item);
        item.jcx = new JCX(this.getContext(), item.x, item.y);
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
		
		for(i = 0, len = this._children.length; i < len; i+=1 ) {
			// coordinate space is relative because we called draw of container first
			this._children[i].draw();
		}
	};
	DisplayObjectContainer.prototype.notifyClick = function(evnt) {
		var i, len;

		if( this._isInBounds(evnt.x, evnt.y) ) {
		
			// delegate to children first
			for( i = 0, len = this._children.length; i < len; i+=1 ) {
				this._children[i].notifyClick(evnt);
			}

			// delegate to self last
			DisplayObject.prototype.notifyClick.call(this, evnt);
		}
	};

	window.DisplayObjectContainer = DisplayObjectContainer;
}());
