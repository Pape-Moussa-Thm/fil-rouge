"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const month_pipe_1 = require("./month.pipe");
describe('MonthPipe', () => {
    it('create an instance', () => {
        const pipe = new month_pipe_1.MonthPipe();
        expect(pipe).toBeTruthy();
    });
});
