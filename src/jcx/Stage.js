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
        });

        // ensure the width/height is correct
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;

        this.context = canvas.getContext("2d");

        this.jcx = new JCX(this._context,0,0);

        // setup click handler
        var that = this;
        canvas.onclick = function(e) {
            that.notifyClick(new MouseEvent(MouseEvent.CLICK, false, false, e.x, e.y));
        };

        // immediately draw the canvas
        DisplayObjectContainer.prototype.draw.call(this);
    }
    
    Stage.prototype = new DisplayObjectContainer();

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
