/*jslint nomen: true*/
/*global define*/

define(['jcx/RenderableObject', 'jcx'], function (RenderableObject, JCX) {

    "use strict";

    function Shape() {
        var _jcx;

        Object.defineProperties(this, {
            color : {
                value: "#000", // TODO: Convert color to use rgba
                writable: true,
                configurable: false,
                enumerable: true
            },
            isInBoundsTester: {
                value: null,
                writable: true,
                configurable: false,
                enumerable: false
            }
        });

        RenderableObject.call(this);
    }

    Shape.prototype = new RenderableObject();

    //@override
    Shape.prototype.draw = function () {
        this.renderer(this.jcx);
        RenderableObject.prototype.draw.call(this);
    };

    //@override
    Shape.prototype._isInBounds = function (x, y) {
        return this.isInBoundsTester(x, y);
    };
    return Shape;
});
