define(['jcx/DisplayObject'],function(DisplayObject){
    "use strict";

    function InteractiveObject(){
        Object.defineProperties(this,{
            accessibilityImplementation:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:false
            },
            contextMenu:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:false
            },
            doubleClickEnabled:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            focusRect:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            mouseEnabled:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            needsSoftKeyboard:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            softKeyboardInputAreaOfInterest:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            tabEnabled:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            tabIndex:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            }
        });
    
        DisplayObject.call(this);
    }

    //set prototype here
    InteractiveObject.prototype = new DisplayObject();
    InteractiveObject.prototype.requestSoftKeyboard = function(){
        //raise a virtual keyboard
    };

    return InteractiveObject;
});
