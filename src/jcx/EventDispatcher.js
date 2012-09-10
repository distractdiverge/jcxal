/*jslint nomen:true*/
/*global define*/

define(function () {

    "use strict";

    //target is an IEventDispatcher
    //not necessary for constructor
    function EventDispatcher(target) {
        // Do Nothing
    }

    EventDispatcher.prototype = {
        //type:string
        //listener:function
        //useCapture:boolean
        //priority:int
        //useWeakReference:boolean
        addEventListener: function (type, listener, useCapture, priority, useWeakReference) {
            if (!useCapture) { useCapture = false; }
            if (!priority) { priority = 0; }
            if (!useWeakReference) { useWeakReference = false; }
            this._eventListeners[type] = listener;
        },

        //event:JCXEvent
        dispatchEvent: function (jcxEvent) {
            jcxEvent.target = this;
            if (this._eventListeners[jcxEvent.type] !== null && this._eventListeners[jcxEvent.type] !== undefined) {
                this._eventListeners[jcxEvent.type](jcxEvent);
            }
        },

        //type:string
        hasEventListener: function (type) {
            // TODO: Implement Method
        },

        //type:string
        //listener:function
        //useCapture:boolean
        removeEventListener: function (type, listener, useCapture) {
            if (!useCapture) { useCapture = false; }
            delete this._eventListeners[type];
        },

        //type:string
        willTrigger: function (type) {
            // TODO: Implement Method
        },

        _eventListeners: {}
    };

    return EventDispatcher;
});