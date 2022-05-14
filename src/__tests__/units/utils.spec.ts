import { convertFloatToUSD } from "../../utils/currency";

describe("should test the unit functions", () => {
  it("should test convertFloatToUSD", () => {
    const value = 123.45;

    const result = convertFloatToUSD(value);
    expect(result).toBe("$123.45");
  });
});
