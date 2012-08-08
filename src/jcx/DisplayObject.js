define(['jcx/EventDispatcher', 'jcx/JCXEvent'], function(EventDispatcher, JCXEvent){

    "use strict";

    // using jcx
    
    function DisplayObject(x, y) {
        var _x, _y,
            _scaleX, _scaleY,
            _stage, _rotation,
            _opaqueBackground,
            _mask, _blendShader,
            _visible;

        if( typeof(x) !== "number" ) {
            throw new Error("x must be a number");
        }

        if( typeof(y) !== "number" ) {
            throw new Error("y must be a number");
        }

        _x = x;
        _y = y;
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
                    this.draw();
                },
                configurable: false,
                enumerable: true
            },
            y: {
                get: function() { return _y; },
                set: function(value) {
                    _y = value;
                    this.draw();
                },
                configurable: false,
                enumerable: true
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
            this.onclick(new JCXEvent("click", this));
        }
    };
    DisplayObject.prototype.onclick = function(e) {
        // do nothing
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
