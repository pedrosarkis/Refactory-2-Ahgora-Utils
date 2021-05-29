// const removeUnderline = (string) => {
//     if (string === undefined) return false;
//     string = string
//         .split("")
//         .map((elem) => (elem === "_" ? "0" : elem))
//         .join("");
//     return string;
// };

import { sum } from "./sla";

describe("basic feature", () => {
    it("remover 1 underline", () => {
        expect(sum(1, 1)).toBe(2);
    });
});
