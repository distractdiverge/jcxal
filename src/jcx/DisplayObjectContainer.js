define(['jcx/DisplayObject', 'jcx/InteractiveObject', 'jcx'], function(DisplayObject, InteractiveObject, JCX){

    "use strict";

    // using jcx
    // using jcx/JCXEvent

    function DisplayObjectContainer() {
        var _context;

        Object.defineProperties(this,
        {
            _children: {
                value: [],
                writable: true,
                configurable: false,
                enumerable: false
            },
            parentContainer: {
                value:null,
                writable: true,
                configurable:false,
                enumerable:false
            },
            context: {
                get: function(){
                    if (!_context){
                        _context = this.parentContainer.context;
                    }
                    return _context;
                },
                set: function(value){
                    _context = value;
                },
                configurable:false,
                enumerable:false
            }
        });

        InteractiveObject.call(this);
    }

    DisplayObjectContainer.prototype = new InteractiveObject();

    DisplayObjectContainer.prototype.addChild = function (item) {
        if( !(item instanceof DisplayObject) ) {
            throw new Error("Cannot add non DisplayObject");
        }
        //TODO: should throw error if 'this' is a descendent of 'item'
        //TODO: if 'item' already has a parent, remove the item from the parent's child list
        
        item.parentContainer = this;
        item.jcx = new JCX(this.context, this.jcx.xOffset+item.x, this.jcx.yOffset+item.y);

        this._children.push(item);
        //TODO: dispatch 'added' event
        return item;
    };

    DisplayObjectContainer.prototype.addChildAt = function(item, index){
        if( !(item instanceof DisplayObject) ){
            throw new Error("Cannot add non DisplayObject");
        }
        if(index < 0 || index >= this._children.length){
            throw new Error("Argument out of range: index is either below zero, or greater than the length of the list");
        }
        //TODO: throw error if 'this' is a decendent of 'item'
        //TODO: if 'item' already has a parent, remove the item from the parent's child list
        this._children.push(item);
        for (var i = this._children.length-1; i<=index; i-=1){
            this.swapChildrenAt(i, i-1);
        }
        //TODO: dispatch 'added' event
        return item;
    };

    DisplayObjectContainer.prototype.areInaccessibleObjectsUnderPoint = function(point){
        //TODO
    };

    DisplayObjectContainer.prototype.contains = function(child){
        if(this === child) { return true; }
        for (var c in this._children){
            if(child === this._children[c]) { return true; }
        }
        return false;
    };

    DisplayObjectContainer.prototype.getChildAt = function(index){
        if(index < 0 || index >= this._children.length){
            throw new Error("Argument out of range: index is either below zero, or greater than the length of the list");
        }
        //TODO: throw security error if child is sandboxed we don't have access to it
        return this._children[index];
    };

    DisplayObjectContainer.prototype.getChildByName = function(name){
        var index = 0;
        var child = null;
        for (var i = 0; i < this._children.length, i+=1)
            if(this._children[i].name == name){
                return this._chidren[i];
            }
        }
        //TODO throw security error if child is sandboxed and we don't have access to it
        return null;
    };

    DisplayObjectContainer.prototype.getChildIndex = function(child){
        var index = this._children.indexOf(child);
        if (index < 0){
            throw new Error("DisplayObject is not a child of this container");
        }
        return index;
    };

    DisplayObjectContainer.prototype.getObjectsUnderPoint = function(point){
        //TODO
    };

    DisplayObjectContainer.prototype.removeChild = function(child){
        this.removeChildAt(this.getChildIndex(child));
    };


    DisplayObjectContainer.prototype.removeChildAt = function(index){
        if( index < 0 || index >= this.children.length ) {
            throw new Error("Index out of range");
        }

        var child = this._children[index];

        delete this._children[index];

        return child;
    };


    DisplayObjectContainer.prototype.setChildIndex = function(child, index){
        //TODO
    };


    DisplayObjectContainer.prototype.swapChildren = function(child1, child2){
        this.swapChildrenAt(this.getChildIndex(child1), this.getChildIndex(child2));
    };

    DisplayObjectContainer.prototype.swapChildrenAt = function(index1, index2){
        var child1 = this._children[index1];
        this._children[index1] = this._children[index2];
        this._children[index2] = child1;
    };

    DisplayObjectContainer.prototype.draw = function() {
        var i, len;

        DisplayObject.prototype.draw.call(this);
        
        for(i = 0, len = this._children.length; i < len; i+=1 ) {
            // coordinate space is relative because we called draw of container first
            this._children[i].draw();
        }
    };

    DisplayObjectContainer.prototype.notifyClick = function(evnt) {
        var i, len;

        if( this._isInBounds(evnt.x, evnt.y) ) {
        
            // delegate to children first
            for( i = 0, len = this._children.length; i < len; i+=1 ) {
                this._children[i].notifyClick(evnt);
            }

            // delegate to self last
            DisplayObject.prototype.notifyClick.call(this, evnt);
        }
    };

    return DisplayObjectContainer;
});
