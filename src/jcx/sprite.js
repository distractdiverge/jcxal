define(['jcx/DisplayObjectContainer'], function(DisplayObjectContainer){

	"use strict";

	function Sprite() {
		DisplayObjectContainer.call(this);
	}

	Sprite.prototype = new DisplayObjectContainer();
	
    return Sprite;
});
