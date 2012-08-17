define(['jcx/DisplayObject', 'jcx'],function(DisplayObject, JCX){
	
	"use strict";

	function RenderableObject(){
		var _jcx;
		Object.defineProperties(this,
		{
			jcx:{
				get: function(){
					if(_jcx == null || _jcx == undefined){
						_jcx = new JCX(this.context);
					}
					return _jcx;
				},
				configurable:false,
				enumerable:true
			}
		});

		DisplayObject.call(this);
	}

	RenderableObject.prototype = new DisplayObject();

	return RenderableObject;
});