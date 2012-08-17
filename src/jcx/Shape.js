define(['jcx/RenderableObject', 'jcx'], function(RenderableObject, JCX){

    function Shape(){
        var _jcx;
        Object.defineProperties(this,{
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
        RenderableObject.call(this);
    }
    
    Shape.prototype = new RenderableObject();
    //@override
    Shape.prototype.draw = function(){
        this.renderer(this.jcx);
        RenderableObject.prototype.draw.call(this);
    };

    //@override
    Shape.prototype._isInBounds = function(x, y){
        return this.isInBoundsTester(x, y);
    };
    return Shape;
});
