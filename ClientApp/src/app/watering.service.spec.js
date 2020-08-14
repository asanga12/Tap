"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var watering_service_1 = require("./watering.service");
describe('WateringService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(watering_service_1.WateringService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=watering.service.spec.js.map