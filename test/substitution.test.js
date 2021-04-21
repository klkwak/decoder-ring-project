const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution function", () => {
  it("returns false if no alphabet is given", () => {
    const input = "hello";
    const actual = substitution(input);
    expect(actual).to.be.false;
  });
  it("returns false if the given alphabet is not exactly 26 characters long", () => {
    const input = "hello";
    const alphabet = "abc";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("returns false if the given alphabet contains any duplicate characters", () => {
    const input = "hello";
    const alphabet = "aieeeeeeeeeeeeeeeeeeeeeeee";
    const actual = substitution(input, alphabet);
    expect(actual).to.be.false;
  });
  it("correctly encodes the given phrase, based on the alphabet given to the function", () => {
    const input = "hello";
    const alphabet = "lmopknijbruhvyqctfxdzeswag";
    const actual = substitution(input, alphabet);
    const expected = "jkhhq";
    expect(actual).to.equal(expected);
  });
  it("correctly decodes the given phrase, based on the alphabet given to the function", () => {
    const input = "jkhhq";
    const alphabet = "lmopknijbruhvyqctfxdzeswag";
    const actual = substitution(input, alphabet, false);
    const expected = "hello";
    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message, before and after encoding", () => {
    const input = "hello world";
    const alphabet = "lmopknijbruhvyqctfxdzeswag";
    const actual = substitution(input, alphabet);
    const expected = "jkhhq sqfhp";
    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message, before and after decoding", () => {
    const input = "jkhhq sqfhp";
    const alphabet = "lmopknijbruhvyqctfxdzeswag";
    const actual = substitution(input, alphabet, false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters (treats uppercase and lowercase letters as the same", () => {
    const alphabet = "lmopknijbruhvyqctfxdzeswag";
    const uppercaseInput = "HELLO";
    const lowercaseInput = "hello";
    const uppercaseCall = substitution(uppercaseInput, alphabet);
    const lowercaseCall = substitution(lowercaseInput, alphabet);
    expect(uppercaseCall).to.equal(lowercaseCall);
  });
});
