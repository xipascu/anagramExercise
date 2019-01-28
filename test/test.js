const assert = require('assert');
const Dictionary = require('/Users/iliNano/Desktop/Programming/Emarsys/Anagram.Instructions/dictionary.js');

const dictObj = new Dictionary;

describe('Dictionary tests', function() {
  describe('Test is alphanumeric', function() {
    it('should return false when word is not alphanumeric', function() {
      assert.equal(dictObj.isAlphaNumeric('asdf.'), false);
    });

    it('should return true when word is alphanumeric', function() {
      assert.equal(dictObj.isAlphaNumeric('anagram'), true);
    });
  });

  describe('Test anagram search', function() {
    it('should find all anagrams of a given word', function() {
      assert.deepEqual(dictObj.getAnagrams('begu'), ["beug", "bgeu", "buge", "ebug", "gebu", "gube", "ugbe"]);
    });

    it('should not find anything when given no word', function() {
      assert.deepEqual(dictObj.getAnagrams(' '), []);
    });

    it('should not find anything when word does not exist in the dictionary', function() {
      assert.deepEqual(dictObj.getAnagrams('asdfasdfsd'), []);
    });
  });
});