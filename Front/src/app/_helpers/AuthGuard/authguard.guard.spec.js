"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const authguard_guard_1 = require("./authguard.guard");
describe('authguardGuard', () => {
    const executeGuard = (...guardParameters) => testing_1.TestBed.runInInjectionContext(() => (0, authguard_guard_1.authguardGuard)(...guardParameters));
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
    });
    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
