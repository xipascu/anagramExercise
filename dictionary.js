
const fs = require("fs")

/**
 * Dictionary class that interacts with the dictionary.
 */
module.exports = class Dictionary{
	/**
	 * Constructs a dictionary object by opening the wordlist.txt file and preprocessing it.
	 */
	constructor(){
		console.log("Initializing dictionary...");
		this.hashMap = {};
		const fileContents = fs.readFileSync('./wordlist.txt').toString();
		this.makeHashMap(fileContents);
		console.log("Done.");
	}

	/**
	 * Checks if a word contains only alphanumeric characters, spaces, and single quotes.
	 * @param word The word to check.
	 * @returns True if alphanumeric.
	 */
	isAlphaNumeric(word){
		const word2 = word.replace(/[^\w\s']/gi, "");
		return word2.length === word.length;
	}

	/**
	 * Converts word into hash.
	 * @param word The word to convert.
	 * @returns The hash.
	 */
	getHash(word){
		return word.split('').sort().join('').toLowerCase()
	}

	/**
	 * Takes a string of words, splits it by new lines, and constructs a hashMap out of them.
	 * @param words The string of words.
	 * @returns True if successful.
	 */
	makeHashMap(words){
		if (words.length < 1) {return;}
		words = words.split("\r\n")

		for (let word of words) {
			// We don't add any words that contain special characters to the hashMap.
			if (!this.isAlphaNumeric(word)){
				continue;
			}

			let hash = this.getHash(word)

			if (hash.length){
				if (!this.hashMap[hash]){
					this.hashMap[hash] = [word];
				} else {
					this.hashMap[hash].push(word);
				}
			}
		}
		
		return true;
	}

	/**
	 * Checks a word against the hashMap.
	 * @param word The word.
	 * @returns An array of anagrams found. 
	 */	
	getAnagrams (word){
		if (!this.isAlphaNumeric(word)){
			return [];
		}
		const hash = this.getHash(word)
		if(typeof this.hashMap[hash] !== "undefined"){
			return this.hashMap[hash];
		} else {
			return [];
		}
	}
}
