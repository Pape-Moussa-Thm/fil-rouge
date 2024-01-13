"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_pipe_1 = require("./module.pipe");
describe('ModulePipe', () => {
    it('create an instance', () => {
        const pipe = new module_pipe_1.ModulePipe();
        expect(pipe).toBeTruthy();
    });
});
