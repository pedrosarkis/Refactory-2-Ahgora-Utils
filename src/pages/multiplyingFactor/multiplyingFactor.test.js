const removeUnderline = (string) => {
    if (string === undefined) return false;
    string = string
        .split("")
        .map((elem) => (elem === "_" ? "0" : elem))
        .join("");
    return string;
};

describe("basic feature", () => {
    it("remover 1 underline", () => {
        expect(removeUnderline("_")).toBe("0");
    });
    it("remover 2 underliners", () => {
        expect(removeUnderline("_0_")).toBe("000");
    });
    it("remover varios underliners", () => {
        expect(removeUnderline("_34_21_39__")).toBe("03402103900");
    });
});
