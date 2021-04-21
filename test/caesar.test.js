const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar function", () => {
  it("returns false if the shift value is equal to 0", () => {
    const input = "life is amazing";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is less than -25", () => {
    const input = "life is amazing";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is greater than 25", () => {
    const input = "life is amazing";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("returns false if the shift value is not present", () => {
    const input = "life is amazing";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });

  it("encodes a message by shifting the letters to the right", () => {
    const input = "life";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "olih";

    expect(actual).to.equal(expected);
  });

  it("decodes a message by shifting the letters to the left", () => {
    const input = "olih";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "life";

    expect(actual).to.equal(expected);
  });

  it("ignores capital letters (treats lowercase and uppercase letters as the same)", () => {
    const lowercaseInput = "LIFE IS AMAZING";
    const uppercaseInput = "life is amazing";
    const shift = 3;
    const lowercaseCall = caesar(lowercaseInput, shift);
    const uppercaseCall = caesar(uppercaseInput, shift);

    expect(lowercaseCall).to.equal(uppercaseCall);
  });

  it("handles shifts that go past the end of the alphabet", () => {
    const input = "z";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "c";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols in the message, before and after encoding", () => {
    const input = "life is amazing!";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "olih lv dpdclqj!";

    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols in the message, before and after decoding", () => {
    const input = "olih lv dpdclqj!";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "life is amazing!";

    expect(actual).to.equal(expected);
  });

  it("allows for negative shift values that shift to the left", () => {
    const input = "life is amazing";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "ifcb fp xjxwfkd";

    expect(actual).to.equal(expected);
  });
});
