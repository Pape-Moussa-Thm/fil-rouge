"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const salle_pipe_1 = require("./salle.pipe");
describe('SallePipe', () => {
    it('create an instance', () => {
        const pipe = new salle_pipe_1.SallePipe();
        expect(pipe).toBeTruthy();
    });
});
