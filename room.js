const Room = function(area, painted){
    this.area = area;
    this.painted = false;

}

Room.prototype.paintRoom = function (area, paintInCan) {
    if (paintInCan === this.area) {
        this.painted = true;
    }
};

module.exports = Room; 