/*global define*/

define(["jcx/JCXEvent"], function (JCXEvent) {

    "use strict";

    function MouseEvent(type, bubbles, cancelable, stageX, stageY, relatedObject, ctrlKey, altKey, shiftKey, buttonDown, delta, commandKey, controlKey, clickCount) {

        Object.defineProperties(this, {

            altKey: {
                value: altKey,
                writable: true,
                configurable: false,
                enumerable: false
            },

            buttonDown: {
                value: buttonDown,
                writable: true,
                configurable: false,
                enumerable: false
            },

            clickCount: {
                value: clickCount,
                writable: false,
                configurable: false,
                enumerable: false
            },

            commandKey: {
                value: commandKey,
                writable: true,
                configurable: false,
                enumerable: false
            },

            controlKey: {
                value: controlKey,
                writable: true,
                configurable: false,
                enumerable: false
            },

            ctrlKey: {
                value: ctrlKey,
                writable: true,
                configurable: false,
                enumerable: false
            },

            delta: {
                value: delta,
                writable: true,
                configurable: false,
                enumerable: false
            },

            localX: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: false
            },

            localY: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: false
            },

            relatedObject: {
                value: relatedObject,
                writable: true,
                configurable: false,
                enumerable: false
            },

            shiftKey: {
                value: shiftKey,
                writable: true,
                configurable: false,
                enumerable: false
            },

            stageX: {
                value: stageX,
                writable: false,
                configurable: false,
                enumerable: false
            },

            stageY: {
                value: stageY,
                writable: false,
                configurable: false,
                enumerable: false
            }
        });

        JCXEvent.call(this, type, bubbles, cancelable);
    }

    MouseEvent.prototype = new JCXEvent(null);

    //@override
    MouseEvent.prototype.clone = function () {
        // TODO: Implement Method
    };

    //@override
    MouseEvent.prototype.toString = function () {
        // TODO: Implement Method
    };

    //@override
    MouseEvent.prototype.updateAfterEvent = function () {
        // TODO: Implement Method
    };

    // Define Event Types
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