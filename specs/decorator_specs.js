const assert = require('assert');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');
const Decorator = require('../models/decorator.js');

describe('Decorator Tests', function(){

    let decorator;
    let paint;
    let room;

    beforeEach(function(){
        paint1 = new Paint(4);
        paint2 = new Paint(3);
        decorator = new Decorator();
    });

    it('should have Paint Stock', function(){
        const result = decorator.paintStock;
        assert.deepStrictEqual(result, []);
    });

    it('should be able to add paint', function(){
        decorator.addPaint(paint1);
        const result = decorator.paintStock;    
        assert.deepStrictEqual(result, [paint1]);
    });

    it('should be able to calculate total litres', function() {
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        const result = decorator.totalLitres();
        assert.strictEqual(result, 7);
    });

    it('should be able to paint room or not', function(){
        decorator = new Decorator(2);
        paint = new Paint(4);
        room = new Room(100, "Not Painted");
        let result = decorator.canPaintRoom(decorator, paint, room);
        assert.strictEqual(result, false)
    });

    it('should be able to paint room if enough paint', function(){
        decorator = new Decorator(11);
        paint = new Paint(10);
        room = new Room(100, "Not Painted");
        decorator.roomPainted(decorator, paint, room);
        let result = room.paintedStatus;
        assert.strictEqual(result, "Painted");
    });
});