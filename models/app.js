const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')


describe('Decorator', function () {

    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
    });
    it('should have a ', function () {
        const result = decorator.;
        assert.strictEqual(result, );
    });
});


describe('Paint', function(){

    let paint;

    beforeEach(function(){
        paint = new Paint(10);
    })

    it('should have paint', function(){
        const result = paint.litres;
        assert.strictEqual(result, 10);
    });
    it('should be empty', function(){
        paint = new Paint(0);
        const result = paint.checkIfEmpty(paint);
        assert.strictEqual(result, true)
    });

}) 


describe('Room', function () {

    let room;

    beforeEach(function(){
        room = new Room(20)
    });
    it('should have a area', function () {
        const result = room.area;
        assert.strictEqual(result, 20);
    });
});

