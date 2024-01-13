"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const duree_pipe_1 = require("./duree.pipe");
describe('DureePipe', () => {
    it('create an instance', () => {
        const pipe = new duree_pipe_1.DureePipe();
        expect(pipe).toBeTruthy();
    });
});
