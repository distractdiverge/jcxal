define(['jcx/DisplayObject', 'jcx'],function(DisplayObject, JCX){
    "use strict";

    function StaticText(){
        //need to do something about this - is duplicated in Shape
        var _jcx;
        Object.defineProperties(this,{
            jcx: {
                get: function(){
                    if(_jcx == null || _jcx == undefined){
                        _jcx = new JCX(this.context);
                    }
                    return _jcx;
                }

            },
            renderer:{
                value: null,
                writable:true,
                configurable:false,
                enumerable:false
            },
            text:{
                value:"",
                writable:true,
                configurable:false,
                enumerable:true
            }
        });
        
        DisplayObject.call(this);
    }

    StaticText.prototype = new DisplayObject();
    StaticText.prototype.draw = function(){
        this.renderer(this.jcx);
        DisplayObject.prototype.draw.call(this);
    };

    return StaticText;
});
