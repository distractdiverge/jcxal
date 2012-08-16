define(['jcx/DisplayObject', 'jcx'], function(DisplayObject, JCX){

    function Shape(){
        var _jcx;
        Object.defineProperties(this,{
            jcx: {
                get: function(){
                    if (_jcx == null || _jcx == undefined){
                        _jcx = new JCX(this.context);
                    }
                    return _jcx;
                },
                configurable:false,
                enumerable:true
            },
            color : {
                value:"#000",
                writable:true,
                configurable:false,
                enumerable:true
            },
            renderer: {
                value: null,
                writable:true,
                configurable:false,
                enumerable:false
            },
            isInBoundsTester: {
                value:null,
                writable:true,
                configurable:false,
                enumerable:false
            }
        });
        DisplayObject.call(this);
    }
    
    Shape.prototype = new DisplayObject();
    //@override
    Shape.prototype.draw = function(){
        this.renderer(this.jcx);
        DisplayObject.prototype.draw.call(this);
    }

    //@override
    Shape.prototype._isInBounds = function(x, y){
        return this.isInBoundsTester(x, y);
    }
    return Shape;
});
