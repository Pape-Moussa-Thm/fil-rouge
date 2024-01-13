"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const guard1_guard_1 = require("./guard1.guard");
describe('guard1Guard', () => {
    const executeGuard = (...guardParameters) => testing_1.TestBed.runInInjectionContext(() => (0, guard1_guard_1.guard1Guard)(...guardParameters));
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
    });
    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });
});
