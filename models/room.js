const Room = function(area, paintedStatus = "Not Painted"){
    this.area = area;
    this.paintedStatus = paintedStatus;
}

Room.prototype.painted = function(room){
    room.paintedStatus = "Painted";
}

module.exports = Room;