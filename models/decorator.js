const Decorator = function(paintStock){
    this.paintStock = [];
};

Decorator.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
};

Decorator.prototype.totalLitres = function() {
    let paintTotal = 0;
    for (paint of this.paintStock) {
        paintTotal += paint.litres;
    }
        return paintTotal;
};

Decorator.prototype.canPaintRoom = function(decorator, paint, room) {
    let canPaint = decorator.totalLitres(decorator, paint);
    if (canPaint > room.area) {
    return true;
    } else {
        return false;
    }
};

Decorator.prototype.roomPainted = function(decorator, paint, room) {
    let canPaint = decorator.canPaintRoom(decorator, paint, room);
    if (canPaint = true) {
        room.paintedStatus = "Painted";
    } else {
        return
    }

}

module.exports = Decorator;