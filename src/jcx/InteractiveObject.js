define(['jcx/DisplayObject'],function(DisplayObject){
    "use strict";

    function InteractiveObject(){
        DisplayObject.call(this);
    }

    //set prototype here
    InteractiveObject.prototype = new DisplayObject();

    return InteractiveObject;
});
