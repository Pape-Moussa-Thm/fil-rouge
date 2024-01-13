"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classe_pipe_1 = require("./classe.pipe");
describe('ClassePipe', () => {
    it('create an instance', () => {
        const pipe = new classe_pipe_1.ClassePipe();
        expect(pipe).toBeTruthy();
    });
});
