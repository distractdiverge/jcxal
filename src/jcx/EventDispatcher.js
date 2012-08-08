(function(){
    "use strict";

    //target is an IEventDispatcher
    //not necessary for constructor
    function EventDispatcher(target){
        if(target){
            //aggregate instance
        }
    }

    EventDispatcher.prototype = {
        //type:string
        //listener:function
        //useCapture:boolean
        //priority:int
        //useWeakReference:boolean
        addEventListener:function(type, listener, useCapture, priority, useWeakReference){
            if(!useCapture){ useCapture = false; }
            if(!priority){ priority = 0; }
            if(!useWeakReference){ useWeakReference = false; }
        },
        //event:Event
        dispatchEvent:function(event){

        },
        //type:string
        hasEventListener:function(type){
            
        },
        //type:string
        //listener:function
        //useCapture:boolean
        removeEventListener:function(type, listener, useCapture){
            if(!useCapture){ useCapture = false; }
        },
        //type:string
        willTrigger:function(type){

        }
    };
}());
