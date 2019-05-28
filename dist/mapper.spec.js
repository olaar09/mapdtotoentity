"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var MockEntity = /** @class */ (function () {
    function MockEntity() {
    }
    return MockEntity;
}());
var MockDTO = /** @class */ (function () {
    function MockDTO() {
    }
    return MockDTO;
}());
var dtoInstance = new MockDTO();
dtoInstance.x = 'Something';
dtoInstance.y = 40;
var mockEntityInstance = new MockEntity();
describe('Entity mapper test', function () {
    var mapResult;
    var entityMapper;
    beforeEach(function () {
        entityMapper = new index_1.mapDtoValuesToEntity();
        mapResult = entityMapper.map(dtoInstance, mockEntityInstance);
    });
    it('should return type of MockEntity ', function () {
        expect(mapResult).toBeDefined();
        expect(mapResult).toBeInstanceOf(MockEntity);
    });
    it('both instances should have similar properties', function () {
        expect(mapResult.x).toBe(dtoInstance.x);
        expect(mapResult.y).toBe(dtoInstance.y);
    });
});
