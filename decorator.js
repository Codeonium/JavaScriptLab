const Decorator = function (stock){
    this.stock = [];
}

Decorator.prototype.addCantoStock = function (paint) {
    this.stock.push(paint);
}

Decorator.prototype.calculatePaintInStock = function () {
    paintTotal = 0;
    for (var paint of this.stock) {
        paintTotal += paint.litres
    }
    return paintTotal
}

Decorator.prototype.canPaintRoom = function (room) {
    if (room.area <= this.calculatePaintInStock) {
        return true
    }
}

module.exports = Decorator;
