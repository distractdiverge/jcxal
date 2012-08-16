define(function() {

    "use strict";

     // a wrapper for normal html5 canvas context
     function JCX(context) {

         Object.defineProperties(this,
         {
             _innerContext : {
                 value: context,
                 writable: false,
                 configurable: false,
                 enumerable: false
             },
         });
     }

    JCX.prototype = {
        drawRectangle: function(x, y, width, height, color, fillColor) {
            if( fillColor ) {
                this._innerContext.fillStyle = fillColor;
                this._innerContext.fillRect(x, y, width, height);
            }

            this._innerContext.strokeStyle = color;
            this._innerContext.strokeRect(x, y, width, height);
        },

        drawSquare: function(x, y, size, color, fillColor) {
            this.drawRectangle(x, y, size, size, color, fillColor);
        },

        drawCircle: function(x, y, radius, color, fillColor) {
            
            if( fillColor ) {
                this._innerContext.fillStyle = fillColor;
                this._innerContext.arc(x, y, radius, 0, 360);
                this._innerContext.fill();
            }

            this._innerContext.strokeStyle = color;
            this._innerContext.stroke();
        }

    };
    return JCX;
});
