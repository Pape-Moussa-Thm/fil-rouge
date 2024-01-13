"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professeur_pipe_1 = require("./professeur.pipe");
describe('ProfesseurPipe', () => {
    it('create an instance', () => {
        const pipe = new professeur_pipe_1.ProfesseurPipe();
        expect(pipe).toBeTruthy();
    });
});
