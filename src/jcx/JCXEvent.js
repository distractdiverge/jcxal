define(function(){
    
    "use strict";

    function JCXEvent(type, bubbles, cancelable) {
        if(bubbles === null || bubbles === undefined){
            bubbles = false;
        }
        if(cancelable === null || cancelable === undefined){
            cancelable = false;
        }
        var _targetLocked = false;
        var _target;

        Object.defineProperties(this,
        {
            bubbles: {
                value:bubbles,
                writable:false,
                configurable:false,
                enumerable:false
            },
            cancelable:{
                value: cancelable,
                writable: false,
                configurable: false,
                enumerable: false
            },
            currentTarget: {
                value: false,
                writable: false,
                configurable: false,
                enumerable: false
            },
            eventPhase: {
                value: 0,
                writable:false,
                configurable: false,
                enumerable:false
            },
            target: {
                get: function(){ return _target; },
                set: function(value){
                    if(_target!==null && !_targetLocked){
                        _target = value;
                        _targetLocked = true;
                    }
                },
                configurable: false,
                enumerable: false
            },
            type: {
                value: type,
                writable:false,
                configurable: false,
                enumerable: false
            }
        });
    }

    JCXEvent.ACTIVATE = "activate";
    JCXEvent.ADDED = "added";
    JCXEvent.ADDED_TO_STAGE = "addedToStage";
    JCXEvent.CANCEL = "cancel";
    JCXEvent.CHANGE = "change";
    JCXEvent.CLEAR = "clear";
    JCXEvent.CLOSE = "close";
    JCXEvent.CLOSING = "closing";
    JCXEvent.COMPLETE = "complete";
    JCXEvent.CONNECT = "connect";
    JCXEvent.CONTEXT3D_CREATE = "context3DCreate";
    JCXEvent.COPY = "copy";
    JCXEvent.CUT = "cut";
    JCXEvent.DEACTIVATE = "deactivate";
    JCXEvent.DISPLAYING = "displaying";
    JCXEvent.ENTER_FRAME = "enterFame";
    JCXEvent.EXIT_FRAME = "exitFrame";
    JCXEvent.FRAME_CONSTRUCTED = "frameConstructed";
    JCXEvent.FULLSCREEN = "fullscreen";
    JCXEvent.HTML_BOUNDS_CHANGE = "htmlBoundsChange";
    JCXEvent.HTML_DOM_INITIALIZE = "htmlDOMInitialize";
    JCXEvent.HTML_RENDER = "htmlRender";
    JCXEvent.ID3 = "id3";
    JCXEvent.INIT = "init";
    JCXEvent.LOCATION_CHANGE = "locationChange";
    JCXEvent.MOUSE_LEAVE = "mouseLeave";
    JCXEvent.NETWORK_CHANGE = "networkChange";
    JCXEvent.OPEN = "open";
    JCXEvent.PASTE = "paste";
    JCXEvent.PREPARING = "preparing";
    JCXEvent.REMOVED = "removed";
    JCXEvent.RENDER = "render";
    JCXEvent.RESIZE = "resize";
    JCXEvent.SCROLL = "scroll";
    JCXEvent.SELECT = "select";
    JCXEvent.SELECT_ALL = "selectAll";
    JCXEvent.SOUND_COMPLETE = "soundComplete";
    JCXEvent.STANDARD_ERROR_CLOSE = "standardErrorClose";
    JCXEvent.STANDARD_INPUT_CLOSE = "standardInputClose";
    JCXEvent.STANDARD_OUTPUT_CLOSE = "standardOutputClose";
    JCXEvent.TAB_CHILDREN_CHANGE = "tabChildrenChange";
    JCXEvent.TAB_ENABLED_CHANGE = "tabEnabledChange";
    JCXEvent.TAB_INDEX_CHANGE = "tabIndexChange";
    JCXEvent.TEXT_INTERACTION_MODE_CHANGE = "textInteractionModeChange";
    JCXEvent.TEXTURE_READY = "textureReady";
    JCXEvent.UNLOAD = "unload";
    JCXEvent.USER_IDLE = "userIdle";
    JCXEvent.USER_PRESENT = "userPresent";

    return JCXEvent;
});
