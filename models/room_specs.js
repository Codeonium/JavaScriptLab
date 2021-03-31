const assert = require('assert');
const Room = require('../room.js');

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