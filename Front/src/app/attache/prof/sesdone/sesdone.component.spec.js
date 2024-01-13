"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const sesdone_component_1 = require("./sesdone.component");
describe('SesdoneComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [sesdone_component_1.SesdoneComponent]
        });
        fixture = testing_1.TestBed.createComponent(sesdone_component_1.SesdoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
