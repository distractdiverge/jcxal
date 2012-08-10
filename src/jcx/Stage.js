// A canvas wrapper for object drawing
define(['jcx', 'jcx/DisplayObjectContainer'], function(JCX, DisplayObjectContainer){

    function Stage(canvas) {

        DisplayObjectContainer.call(this);
        Object.defineProperties(this,{
            align:{
                value:null,
                writable:true,
                configurable:false,
                enumerable: true
            },
            allowsFullScreen:{
                value: false,
                writable:false,
                configurable:false,
                enumerable: true
            },
            allowsFullScreenInteractive:{
                value:false,
                writable:true,
                configurable:false,
                enumerable:true
            },
            autoOrients:{
                value:false,
                writable: true,
                configurable:false,
                enumerable: true
            },
            color:{
                value:"#ffffff",
                writable:true,
                configurable:false,
                enumerable: true
            },
            colorCorrection:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            colorCorrectionSupport:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            constructor:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            deviceOrientation:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            displayState:{
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
            fullScreenHeight:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            fullScreenSourceRect:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            fullScreenWidth:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            height:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
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
            numChildren:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            orientation:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            quality:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            scaleMode:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            showDefaultContextMenu:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            softKeyboardRect:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            stageFocusRect:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            stageHeight:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            stageVideos:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            stageWidth:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },

            supportedOrientations:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            supportsOrientationChange:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            tabChildren:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            textSnapshot:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            },
            width:{
                value:null,
                writable:true,
                configurable:false,
                enumerable:true
            },
            wmodeGPU:{
                value:null,
                writable:false,
                configurable:false,
                enumerable:true
            }
        });

        // ensure the width/height is correct
        canvas.style.width = canvas.width;
        canvas.style.height = canvas.height;

        this.context = canvas.getContext("2d");

        this.jcx = new JCX(this._context,0,0);

        // setup click handler
        var that = this;
        canvas.onclick = function(e) {
            that.notifyClick(e);
        };

        // immediately draw the canvas
        DisplayObjectContainer.prototype.draw.call(this);
    }
    
    Stage.prototype = new DisplayObjectContainer();

    Stage.prototype._isInBounds = function(x, y) { return true; };

    //@override
    Stage.prototype.addChild = function(item){
        DisplayObjectContainer.prototype.addChild.call(this, item);
        //TODO
    };

    //@override
    Stage.prototype.addChildAt = function(child, index){
        //TODO what does this override?
    };

    //@override
    Stage.prototype.addEventListener = function(type, listener, useCapture, priority, useWeakReference){
        DisplayObjectContainer.prototype.addEventListener(this, type, listener, useCapture, priority, useWeakReference);
        //TODO
    };

    Stage.prototype.assignFocus = function(objectToFocus, direction){
        //TODO
    };

    //@override
    Stage.prototype.dispatchEvent = function(evnt){
        //TODO
    };

    //@override
    Stage.prototype.hasEventListener = function(type){
        //TODO
    };

    Stage.prototype.invalidate = function(){
        //TODO
    };

    Stage.prototype.isFocusInaccessible = function(){
        //TODO
    };
    //@override
    Stage.prototype.removeChildAt = function(index){
        //TODO
    };

    Stage.prototype.setAspectRatio = function(newAspectRatio){
        //TODO
    };

    //@override
    Stage.prototype.setChildIndex = function(child, index){
        //TODO
    };

    Stage.prototype.setOrientation = function(newOrientation){
        //TODO
    };
    
    //@override
    Stage.prototype.swapChildrenAt = function(index1, index2){
        //TODO
    };

    Stage.prototype.willTrigger = function(type){
        //TODO
    };

    return Stage;
});
