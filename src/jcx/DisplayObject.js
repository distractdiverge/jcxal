define(['jcx/EventDispatcher', 'jcx/MouseEvent'], function(EventDispatcher, MouseEvent){

    "use strict";

    function DisplayObject() {
        var _x, _y,
            _scaleX, _scaleY,
            _stage, _rotation,
            _visible, _stageX,
            _stageY, _context;

        var _onclick, _onmousedown,
            _onmouseup, _onmousemove,
            _ondoubleclick;

        _x = 0;
        _y = 0;
        _scaleX = 1;
        _scaleY = 1;
        _rotation = 0;

        var _stageLocked = false;

        Object.defineProperties(this,
        {
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
            context: {
                get: function(){
                    if (!_context){
                        _context = this.parentContainer.context;
                    }
                    return _context;
                },
                set: function(value){
                    _context = value;
                },
                configurable:false,
                enumerable:false
            },
            height: {
                value: null,
                writable: true,
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
            stageX: {
                get: function(){
                    return this.x + this.parentContainer.stageX;
                },
                set: function(value){
                     this.x = value - this.parentContainer.stageX;
                },
                configurable:true,
                enumerable:true
            },
            stageY: {
                get: function(){
                    return this.y + this.parentContainer.stageY;
                },
                set: function(value){
                    this.y = value - this.parentContainer.stageY;
                },
                configurable:true,
                enumerable:true
            },
            rotation: {
                set: function(value) {
                    _rotation = value;
                },
                configurable: false,
                enumerable: true
            },
            scaleX: {
                get: function() { return _scaleX; },
                set: function(value) {
                    _scaleX = value;
                },
                configurable: false,
                enumerable: true
            },
            scaleY: {
                get: function() { return _scaleY; },
                set: function(value){
                    _scaleY = value;
                },
                configurable: false,
                enumerable: true
            },
            stage: {
                get: function() { return _stage; },
                set: function(value){
                    if(!_stageLocked){
                        _stage = value;
                    }
                    _stageLocked = true;
                },
                configurable: false,
                enumerable: false
            },
            visible: {
                get: function() { return _visible; },
                set: function(value){
                    _visible = value;
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
                },
                configurable: false,
                enumerable: true
            },
            y: {
                get: function() { return _y; },
                set: function(value) {
                    _y = value;
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
            },
            onmousedown: {
                get: function(){ return _onmousedown; },
                set: function(value){
                    this.removeEventListener(MouseEvent.MOUSE_DOWN);
                    _onmousedown=value;
                    this.addEventListener(MouseEvent.MOUSE_DOWN, _onmousedown);
                },
                configurable:false,
                enumerable:false
            },
            onmouseup: {
                get: function(){ return _onmouseup; },
                set: function(value){
                    this.removeEventListener(MouseEvent.MOUSE_UP);
                    _onmouseup=value;
                    this.addEventListener(MouseEvent.MOUSE_UP, _onmouseup);
                },
                configurable:false,
                enumerable:false
            },
            onmousemove: {
                get: function(){ return _onmousemove; },
                set: function(value){
                    this.removeEventListener(MouseEvent.MOUSE_MOVE);
                    _onmousemove=value;
                    this.addEventListener(MouseEvent.MOUSE_MOVE, _onmousemove);
                },
                configurable:false,
                enumerable:false
            },
        });

        EventDispatcher.call(this);
    }

    DisplayObject.prototype = new EventDispatcher();

    //Protected properties
    Object.defineProperties(DisplayObject.prototype, {
        parentContainer: {
            value: null,
            writable:false,
            configurable:false,
            enumerable:false
        },
    });

    DisplayObject.prototype._isInBounds = function(x, y) {
        return (x >= this.stageX && x <= this.stageX + this.width && y >= this.stageY && y <= this.stageY + this.height);
    };
    DisplayObject.prototype.draw = function() {
        // perform drawing logic
    };
    DisplayObject.prototype.notifyClick = function(e) {
        if( this.hitTestPoint(e.stageX, e.stageY) ) {
            this.dispatchEvent(new MouseEvent(MouseEvent.CLICK, null, null, e.stageX, e.stageY));
        }
    };
    DisplayObject.prototype.notifyMouseDown = function(e) {
        if( this.hitTestPoint(e.stageX, e.stageY) ) {
            this.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_DOWN, null, null, e.stageX, e.stageY));
        }
    };
    DisplayObject.prototype.notifyMouseUp = function(e) {
        if( this.hitTestPoint(e.stageX, e.stageY) ) {
            this.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_UP, null, null, e.stageX, e.stageY));
        }
    };
    DisplayObject.prototype.notifyMouseMove = function(e) {
        if( this.isBeingDragged ) {
            this.dispatchEvent(new MouseEvent(MouseEvent.MOUSE_MOVE, null, null, e.stageX, e.stageY));
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
    //the 'shapeFlag' argument defaults to false and determines whether to check pixels (true) or just the bounding box (false)
    DisplayObject.prototype.hitTestPoint = function(x, y, shapeFlag){
        return this._isInBounds(x, y);
    };
    DisplayObject.prototype.localToGlobal = function(point){
        
    };
    return DisplayObject;
});
