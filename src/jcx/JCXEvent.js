(function(){
	
	"use strict";

	function JCXEvent(name, source) {
		var _name, _source;

		_name = name;
		_source = source;

		Object.defineProperties(this,
		{
			name: {
				get: function(){return _name;},
				configurable: false,
				enumerable: false
			},
			source: {
				get: function(){return _source;},
				configurable: false,
				enumerable: false
			}
		});
	}

	window.JCXEvent = JCXEvent;

}());