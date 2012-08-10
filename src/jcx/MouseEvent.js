define(["jcx/JCXEvent"],function(JCXEvent){
    "use strict";

    function MouseEvent(type, bubbles, cancelable, localX, localY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount){
        Object.defineProperties(this,
        {
            altKey:{
                value:altKey,
                writable:true,
                configurable:false,
                enumerable:false
            },
            buttonDown:{
                value:buttonDown,
                writable:true,
                configurable:false,
                enumerable:false
            },
            clickCount:{
                value:clickCount,
                writable:false,
                configurable:false,
                enumerable:false
            },
            commandKey:{
                value:commandKey,
                writable:true,
                configurable:false,
                enumerable:false
            },
            controlKey:{
                value:controlKey,
                writable:true,
                configurable:false,
                enumerable:false
            },
            ctrlKey:{
                value:ctrlKey,
                writable:true,
                configurable:false,
                enumerable:false
            },
            delta:{
                value:delta,
                writable:true,
                configurable:false,
                enumerable:false
            },
            isRelatedObjectInaccessible:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:false
            },
            localX:{
                value:localX,
                writable:true,
                configurable:false,
                enumerable:false
            },
            localY:{
                value:localY,
                writable:true,
                configurable:false,
                enumerable:false
            },
            relatedObject:{
                value:relatedObject,
                writable:true,
                configurable:false,
                enumerable:false
            },
            shiftKey:{
                value:shiftKey,
                writable:true,
                configurable:false,
                enumerable:false
            },
            stageX:{
                value:null,//TODO
                writable:false,
                configurable:false,
                enumerable:false
            },
            stageY:{
                value:null,//TODO
                writable:false,
                configurable:false,
                enumerable:false
            }
            
        });
        JCXEvent.call(this, type, bubbles, cancelable);
    }

    MouseEvent.prototype = new JCXEvent(null);

    //@override
    MouseEvent.prototype.clone = function(){ };
    //@override
    MouseEvent.prototype.toString = function(){ };
    //@override
    MouseEvent.prototype.updateAfterEvent = function(){ };

    MouseEvent.CLICK = "click";
    MouseEvent.CONTEXT_MENU = "contextMenu";
    MouseEvent.DOUBLE_CLICK = "doubleClick";
    MouseEvent.MIDDLE_CLICK = "middleClick";
    MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
    MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
    MouseEvent.MOUSE_DOWN = "mouseDown";
    MouseEvent.MOUSE_MOVE = "mouseMove";
    MouseEvent.MOUSE_OUT = "mouseOut";
    MouseEvent.MOUSE_OVER = "mouseOver";
    MouseEvent.MOUSE_UP = "mouseUp";
    MouseEvent.MOUSE_WHEEL = "mouseWheel";
    MouseEvent.RIGHT_CLICK = "rightClick";
    MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
    MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
    MouseEvent.ROLL_OUT = "rollOut";
    MouseEvent.ROLL_OVER = "rollOver";

    return MouseEvent;
});
