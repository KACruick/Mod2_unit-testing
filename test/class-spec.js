const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      let word1 = new Word("word");
      expect(word1.word).to.exist;
      //expect.fail("replace with your code");
    });
  
    it('should set the "word" property when a new word is created', function () {
      let word1 = new Word("word")
      expect(word1.word).to.equal("word")
      //expect.fail("replace with your code");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let word1 = new Word("word");
      let result = word1.removeVowels();
      //console.log(result);
      expect(result).to.equal("wrd");
      //expect.fail("replace with your code");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      //expect.fail("replace with your code");
      let word1 = new Word("word");
      let result = word1.removeConsonants();
      expect(result).to.equal("o")
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      //expect.fail("replace with your code");
      let word1 = new Word("word");
      let result = word1.pigLatin();
      expect(result).to.equal("ordway")
    });
  });
});
