const assert = require('assert');
const Paint = require('../models/paint.js');


describe('Paint Tests',function(){
    let paint;

    beforeEach(function() {
        paint = new Paint(5);
    });

    it('should have litres',function(){
        const result = paint.litres;
        assert.strictEqual(result, 5);
    });

    it('should be able to check if empty',function(){
        const result = paint.checkIfCanEmpty();
        assert.strictEqual(result, false);
    });

});