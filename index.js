"use strict";
exports.__esModule = true;
var mapDtoValuesToEntity = /** @class */ (function () {
    function mapDtoValuesToEntity() {
    }
    mapDtoValuesToEntity.prototype.map = function (DTOInstance, Entity) {
        Object.keys(DTOInstance).forEach(function (key) {
            Entity[key] = DTOInstance[key];
        });
        return Entity;
    };
    return mapDtoValuesToEntity;
}());
exports.mapDtoValuesToEntity = mapDtoValuesToEntity;
