"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const breukh_service_1 = require("./breukh.service");
describe('BreukhService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(breukh_service_1.BreukhService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
