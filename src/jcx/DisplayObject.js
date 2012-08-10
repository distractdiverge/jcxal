define(['jcx/EventDispatcher', 'jcx/MouseEvent'], function(EventDispatcher, MouseEvent){

    "use strict";

    // using jcx
    
    function DisplayObject() {
        var _x, _y,
            _scaleX, _scaleY,
            _stage, _rotation,
            _opaqueBackground,
            _mask, _blendShader,
            _visible, _onclick;

        _x = 0;
        _y = 0;
        _scaleX = 1;
        _scaleY = 1;
        _rotation = 0;
        _opaqueBackground = null;
        _blendShader = null;

        Object.defineProperties(this,
        {
            jcx: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: false
            },
            alpha: {
                value: 1.0,
                writable: true,
                configurable: false,
                enumerable: true
            },
            blendMode:{
                value:"",
                writable: true,
                configurable: false,
                enumerable:true
            },
            blendShader: {
                set: function(value){
                    _blendShader = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            cacheAsBitmap: {
                value: false,
                writable: true,
                configurable: false,
                enumerable: true
            },
            cacheAsBitmapMatrix: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: true
            },
            filters: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: true
            },
            height: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: true
            },
            loaderInfo: {
                value: null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            mask: {
                get: function() { return _mask; },
                set: function(value){
                    _mask = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            mouseX: {
                value: null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            mouseY: {
                value: null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            name: {
                value: "",
                writable: true,
                configurable: false,
                enumerable: true
            },
            opaqueBackground: {
                get: function() { return _opaqueBackground; },
                set: function(value) {
                    _opaqueBackground = value;
                    this.draw();
                },
                configurable:false,
                enumerable: true
            },
            parentDisplayObjectContainer: {
                value: null,
                writable:false,
                configurable:false,
                enumerable:false
            },
            root: {
                value: null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            rotation: {
                set: function(value) {
                    _rotation = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            scaleX: {
                get: function() { return _scaleX; },
                set: function(value) {
                    _scaleX = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            scaleY: {
                get: function() { return _scaleY; },
                set: function(value){
                    _scaleY = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            stage: {
                value: null,
                writable: false,
                configurable: false,
                enumerable: false
            },
            visible: {
                get: function() { return _visible; },
                set: function(value){
                    _visible = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            width: {
                value: null,
                writable:true,
                configurable: false,
                enumerable: true
            },
            x: {
                get: function() { return _x; },
                set: function(value) {
                    _x = value;
                    //this.draw();
                },
                configurable: false,
                enumerable: true
            },
            y: {
                get: function() { return _y; },
                set: function(value) {
                    _y = value;
                    //this.draw();
                },
                configurable: false,
                enumerable: true
            },
            onclick: {
                get: function(){ return _onclick; },
                set: function(value){
                    this.removeEventListener(MouseEvent.CLICK);
                    _onclick=value;
                    this.addEventListener(MouseEvent.CLICK, _onclick);
                },
                configurable:false,
                enumerable:false
            }
        });

        EventDispatcher.call(this);
    }

    DisplayObject.prototype = new EventDispatcher();

    DisplayObject.prototype._isInBounds = function(x, y) {
        
        // test to see if point is inbounds

        return false;
    };
    DisplayObject.prototype.draw = function() {
        // perform drawing logic
    };
    DisplayObject.prototype.notifyClick = function(e) {
        if( this._isInBounds(e.x, e.y) ) {
            this.dispatchEvent(new MouseEvent(MouseEvent.CLICK, null, null, e.x, e.y));
        }
    };

    //PUBLIC METHODS
    //the 'targetCoordinateSpace' parameter should be a DispayObjectContainer
    DisplayObject.prototype.getBounds = function(targetCoordinateSpace){

    };
    //the 'targetCoordinateSpace' parameter should be a DisplayObjectContainer
    DisplayObject.prototype.getRect = function(targetCoordinateSpace){
        
    };
    DisplayObject.prototype.globalToLocal = function(point){
        
    };
    //the 'obj' parameter should be another DisplayObject
    DisplayObject.prototype.hitTestObject = function(obj){

    };
    //the 'shapeFlag' argument defaults to false and determines whether to check pixels (true) or just the bounding box (false)
    DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag){
        
    };
    DisplayObject.prototype.localToGlobal = function(point){

    };
    return DisplayObject;
});
