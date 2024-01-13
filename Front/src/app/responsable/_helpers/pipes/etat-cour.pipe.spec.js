"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const etat_cour_pipe_1 = require("./etat-cour.pipe");
describe('EtatCourPipe', () => {
    it('create an instance', () => {
        const pipe = new etat_cour_pipe_1.EtatCourPipe();
        expect(pipe).toBeTruthy();
    });
});
