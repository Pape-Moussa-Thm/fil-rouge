"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_pipe_1 = require("./date.pipe");
describe('DatePipe', () => {
    it('create an instance', () => {
        const pipe = new date_pipe_1.DatePipe();
        expect(pipe).toBeTruthy();
    });
});
