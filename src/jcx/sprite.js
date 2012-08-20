define(['jcx/DisplayObjectContainer'], function(DisplayObjectContainer){

	"use strict";

	var _isBeingDragged = false;
	var _isBeingTouchDragged = false;
	function Sprite() {
        Object.defineProperties(this, {
            isBeingDragged:{
                get:function(){return _isBeingDragged;},
                configurable:false,
                enumerable:false
            }
        });
		DisplayObjectContainer.call(this);
	}

	Sprite.prototype = new DisplayObjectContainer();
	
	Sprite.prototype.startDrag = function(lockCenter, bounds){
		_isBeingDragged = true;
	};

	Sprite.prototype.startTouchDrag = function(touchPointID, lockCenter, bounds){
		_isBeingTouchDragged= true;
	};

	Sprite.prototype.stopDrag = function(){
		_isBeingDragged = false;
	};

	Sprite.prototype.stopTouchDrag = function(){
		_isBeingTouchDragged = false;
	};
    return Sprite;
});
