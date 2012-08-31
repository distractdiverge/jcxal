define(['jcx/RenderableObject', 'jcx'],function(RenderableObject, JCX){
    "use strict";

    function StaticText(){
        //need to do something about this - is duplicated in Shape
        var _jcx;
        Object.defineProperties(this,{
            text:{
                value:"",
                writable:true,
                configurable:false,
                enumerable:true
            }
        });
        
        RenderableObject.call(this);
    }

    StaticText.prototype = new RenderableObject();
    StaticText.prototype.draw = function(){
        this.renderer(this.jcx);
        RenderableObject.prototype.draw.call(this);
    };

    return StaticText;
});
