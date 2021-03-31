const Paint = function(litres){
    this.litres = litres;
}

Paint.prototype.checkIfEmpty = function (litres) {
    if (this.litres === 0) {
        return true
    } else {
        return false
    }

}
Paint.prototype.emptySelf = function (litres) {
    if (this.checkIfEmpty === false) {
        this.litres = 0
    }
}

module.exports = Paint;