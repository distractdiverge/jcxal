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
            
            this._innerContext.beginPath();
            if( fillColor ) {
                this._innerContext.fillStyle = fillColor;
                this._innerContext.arc(x, y, radius, 0, 360);
                this._innerContext.fill();
            }

            this._innerContext.strokeStyle = color;
            this._innerContext.stroke();
            this._innerContext.closePath();
        },
        drawText: function(x, y, text, color, fillColor){
            //y is the bottom (baseline?) of the text by default
            this._innerContext.font = "900 14px/2 Consolas";
            if(fillColor){
                this._innerContext.fillStyle = fillColor;
                this._innerContext.fillText(text, x, y);
            }
            this._innerContext.strokeStyle = color;
            this._innerContext.strokeText(text,x,y);
        },
        clearRect: function(x, y, width, height){
            this._innerContext.clearRect(x,y,width,height);
        }
    };
    return JCX;
});
