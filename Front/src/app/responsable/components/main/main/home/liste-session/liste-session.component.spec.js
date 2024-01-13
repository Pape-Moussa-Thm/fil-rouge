"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const liste_session_component_1 = require("./liste-session.component");
describe('ListeSessionComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [liste_session_component_1.ListeSessionComponent]
        });
        fixture = testing_1.TestBed.createComponent(liste_session_component_1.ListeSessionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
