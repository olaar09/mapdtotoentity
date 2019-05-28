"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
