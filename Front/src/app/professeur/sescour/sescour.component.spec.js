"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const sescour_component_1 = require("./sescour.component");
describe('SescourComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [sescour_component_1.SescourComponent]
        });
        fixture = testing_1.TestBed.createComponent(sescour_component_1.SescourComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
