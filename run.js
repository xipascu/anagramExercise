const Dictionary = require('./dictionary.js');
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

/**
 * Create a new instance of the Dictionary. 
 */
const dictObj = new Dictionary;

/**
 * Runs the user interactive input endlessly.
 */
function init(){
	readline.question("\nWords would you like to check, separated by spaces: \n(Ctrl + C to Quit)\n", (word) => {
		let wordSplit = word.split(" ");
		// Loop through the words and find anagrams.
		for (let word in wordSplit){
			let currentWord =  wordSplit[word]
			console.time("Request");
			let anagrams = dictObj.getAnagrams(currentWord);;
			if (anagrams.length){
				console.log(`\nAnagrams found for ${currentWord}:\n`, anagrams.join(" "));
			} else {
				console.log("\nNo anagrams found. Try another.");		
			}
			console.timeEnd("Request");
		}
		init();
	})
}

// Initial run.
init();
