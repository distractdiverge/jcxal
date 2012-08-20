// A canvas wrapper for object drawing
define(['jcx', 'jcx/DisplayObjectContainer', 'jcx/MouseEvent'], function(JCX, DisplayObjectContainer, MouseEvent){

    function Stage(canvas) {

        DisplayObjectContainer.call(this);
        Object.defineProperties(this,{
            color:{
                value:"#ffffff",
                writable:true,
                configurable:false,
                enumerable: true
            },
            constructor:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            focus:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            frameRate:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            //@override
            mouseChildren:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            nativeWindow:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            //@override
            numChildren:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            //@override
            tabChildren:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            stageX: {
                value:0,
                writable:false,
                configurable:false,
                enumerable:false
            },
            stageY: {
                value:0,
                writable:false,
                configurable:false,
                enumerable:false
            }
        });

        // ensure the width/height is correct
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;
        this.height = canvas.height;
        this.width = canvas.width;

        this.context = canvas.getContext("2d");

        // setup click handler
        var that = this;
        canvas.onclick = function(e) {
            that.notifyClick(new MouseEvent(MouseEvent.CLICK, false, false, e.x, e.y));
        };
        canvas.onmousedown = function(e){
            that.notifyMouseDown(new MouseEvent(MouseEvent.MOUSE_DOWN, false, false, e.x, e.y));
        };
        canvas.onmouseup = function(e){
            that.notifyMouseUp(new MouseEvent(MouseEvent.MOUSE_UP, false, false, e.x, e.y));
        };
        canvas.onmousemove = function(e){
            for (var c in that._children){
                if(that._children[c].isBeingDragged){
                    that._children[c].notifyMouseMove(new MouseEvent(MouseEvent.MOUSE_MOVE, false, false, e.x, e.y));
                }
            }
        };
    }
    
    Stage.prototype = new DisplayObjectContainer();

    //@override
    Stage.prototype.draw = function(){
        this.context.clearRect(0, 0, this.width, this.height);
        DisplayObjectContainer.prototype.draw.call(this);
    };

    //@override
    Stage.prototype.addChild = function(item){
        DisplayObjectContainer.prototype.addChild.call(this, item);
        item.stage = this;
    };

    //@override
    Stage.prototype.addChildAt = function(item, index){
        DisplayObjectContainer.prototype.addChildAt.call(this, item, index);
        item.stage = this;
    };

    return Stage;
});
