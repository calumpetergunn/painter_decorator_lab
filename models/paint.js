const Paint = function(litres){
    this.litres = litres;
}

Paint.prototype.checkIfCanEmpty = function(){
    if (this.litres === 0){
        return true
    } else {
        return false
    }
};


module.exports = Paint;