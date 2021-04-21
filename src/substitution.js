const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;
    const alphabetTestArray = alphabet.split("");
    for (let letter of alphabetTestArray) {
      let letterCount = alphabetTestArray.filter(
        (character) => character === letter
      ).length;
      if (letterCount > 1) return false;
    }
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet;
    input = input.toLowerCase();
    const splitArray = input.split("");
    const encodedArray = [];

    function findAlphabetIndexOfCharacter(array, checkAlphabet, foundAlphabet) {
      for (let character of array) {
        if (checkAlphabet.includes(character)) {
          const foundIndex = checkAlphabet.indexOf(character);
          character = foundAlphabet[foundIndex];
        }
        encodedArray.push(character);
      }
    }

    // DECODING SECTION:
    if (!encode) {
      findAlphabetIndexOfCharacter(
        splitArray,
        substitutionAlphabet,
        normalAlphabet
      );
    } else {
      // ENCODING SECTION:
      findAlphabetIndexOfCharacter(
        splitArray,
        normalAlphabet,
        substitutionAlphabet
      );
    }
    return encodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
