define(['jcx/DisplayObject', 'jcx/InteractiveObject', 'jcx/MouseEvent', 'jcx'], function(DisplayObject, InteractiveObject, MouseEvent, JCX){

    "use strict";

    // using jcx
    // using jcx/JCXEvent

    function DisplayObjectContainer() {
        var _context=null, _mouseChildren=true, _tabChildren=true;

        Object.defineProperties(this,
        {
            _children: {
                value: [],
                writable: true,
                configurable: false,
                enumerable: true
            },
            mouseChildren: {
                get: function(){
                    return _mouseChildren;
                },
                set: function(value){
                    _mouseChildren = value;
                },
                configurable:true,
                enumerable:false
            },
            numChildren: {
                get: function(){
                    return this._children.length;
                },
                configurable:true,
                enumerable:false
            },
            tabChildren: {
                get: function(){
                    return _tabChildren;
                },
                set: function(value){
                    _tabChildren = value;
                },
                configurable:true,
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

    DisplayObjectContainer.prototype.checkIsAncestor = function(item){
        var currentDisplayObject = this;
        while(currentDisplayObject!==null){
            if (currentDisplayObject === item){
                return true;
            }
            currentDisplayObject = currentDisplayObject.parentContainer;
        }
        return false;
    }

    DisplayObjectContainer.prototype.addChild = function (item) {
        if( !(item instanceof DisplayObject) ) {
            throw new Error("Cannot add non DisplayObject");
        }

        if(this.checkIsAncestor(item)){
            throw new Error("The DisplayObject you are trying to add is an ancestor of the DisplayObject you are adding it to")
        }

        if(item.parentContainer !== null){
            item.parentContainer.removeChild(item);
        }
        
        item.parentContainer = this;
        item.jcx = new JCX(this.context, this.jcx.xOffset+item.x, this.jcx.yOffset+item.y);

        this._children.push(item);
        return item;
    };

    DisplayObjectContainer.prototype.addChildAt = function(item, index){
        if( !(item instanceof DisplayObject) ){
            throw new Error("Cannot add non DisplayObject");
        }

        if(index < 0 || index >= this._children.length){
            throw new Error("Argument out of range: index is either below zero, or greater than the length of the list");
        }
        
        if(this.checkIsAncestor(item)){
            throw new Error("The DisplayObject you are trying to add is an ancestor of the DisplayObject you are adding it to")
        }

        if(item.parentContainer !== null){
            item.parentContainer.removeChild(item);
        }

        item.parentContainer = this;
        item.jcx = new JCX(this.context, this.jcx.xOffset+item.x, this.jcx.yOffset+item.y);

        this._children.splice(index, 0, item);
        return item;
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
        return this._children[index];
    };

    DisplayObjectContainer.prototype.getChildByName = function(name){
        var index = 0;
        var child = null;
        for (var i = 0; i < this._children.length; i+=1){
            if(this._children[i].name == name){
                return this._chidren[i];
            }
        }
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
        return this._children.filter(function(child){return child.hitTestPoint(point.x, point.y);});
    };

    DisplayObjectContainer.prototype.removeChild = function(child){
        return this.removeChildAt(this.getChildIndex(child));
    };


    DisplayObjectContainer.prototype.removeChildAt = function(index){
        if( index < 0 || index >= this.children.length ) {
            throw new Error("Index out of range");
        }
        return this._children.splice(index, 1)[0];
    };


    DisplayObjectContainer.prototype.setChildIndex = function(child, index){
        var index2 = this.getChildIndex(child);
        this.swapChildrenAt(index, index2);
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

    //@override
    DisplayObjectContainer.prototype.notifyClick = function(evnt) {
        var i, len;

        //capture

        //propagation
        this.getObjectsUnderPoint({x:evnt.stageX, y:evnt.stageY}).every(function(item, index){
            var newEvent = new MouseEvent(MouseEvent.CLICK, evnt.bubbles, evnt.cacelable, evnt.stageX, evnt.stageY);
            newEvent.target = item;
            item.notifyClick(newEvent);
        });

        //bubble
        DisplayObject.prototype.notifyClick.call(this, evnt);
    };

    return DisplayObjectContainer;
});
