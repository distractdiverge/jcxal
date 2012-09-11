/*jslint nomen: true*/
/*global define*/

define(['jcx/DisplayObjectContainer'], function (DisplayObjectContainer) {

    "use strict";

    function Sprite() {
        this._isBeingTouchDragged = false; // TODO: Replace these properties with internal variables & Object definedProperties
        this._isBeingDragged = false;
        Object.defineProperties(this, {
            isBeingDragged: {
                get: function () {return this._isBeingDragged; },
                configurable: false,
                enumerable: false
            }
        });

        DisplayObjectContainer.call(this);
    }

    Sprite.prototype = new DisplayObjectContainer();

    Sprite.prototype.startDrag = function (lockCenter, bounds) {
        this._isBeingDragged = true;
    };

    Sprite.prototype.startTouchDrag = function (touchPointID, lockCenter, bounds) {
        this._isBeingTouchDragged = true;
    };

    Sprite.prototype.stopDrag = function () {
        this._isBeingDragged = false;
    };

    Sprite.prototype.stopTouchDrag = function () {
        this._isBeingTouchDragged = false;
    };
    return Sprite;
});
