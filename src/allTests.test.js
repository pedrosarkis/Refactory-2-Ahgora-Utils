import { sum, decrease, removeUnderline, extractHoursFromSeconds, calcNightlyFactor, removeNightlyFactor } from "./helper/calculator";

describe("Utils", () => {
    it("Sum", () => {
        expect(sum({ hour1: "01", hour2: "01", minute1: "05", minute2: "05" })).toStrictEqual({ hours: 2, minutes: 10 });
        expect(sum({ hour1: "03", hour2: "01", minute1: "30", minute2: "15" })).toStrictEqual({ hours: 4, minutes: 45 });
    });
    it("Decrease", () => {
        expect(decrease({ hour1: "01", hour2: "00", minute1: "05", minute2: "55" })).toStrictEqual({ hours: 0, minutes: 10 });
    });
    it("RemoveUnderline: '__:05' ", () => {
        expect(removeUnderline("__:05")).toStrictEqual("00:05");
    });
    it("extractHoursFromSeconds", () => {
        expect(extractHoursFromSeconds(4680)).toStrictEqual(1);
        expect(extractHoursFromSeconds(9360)).toStrictEqual(2);
        expect(extractHoursFromSeconds(3600)).toStrictEqual(1);
    });

    it("calcNightlyFactor", () => {
        expect(calcNightlyFactor({ hours: 1, minutes: 0 })).toStrictEqual({ hours: 1, minutes: 8 });
    });

    it("removeNightlyFactor", () => {
        expect(removeNightlyFactor({ hours: 1, minutes: 8 })).toStrictEqual({ hours: 1, minutes: 0 });
    });
});
