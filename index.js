function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('')// reverse the input word
  return word===reversedWord // compare reverseWord and word and return boolean function

}

/* 
  Add your pseudocode here
  reverse the input word
  if the reversed word == input word
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  the isPalindrom function take in a word as input it then reverse the word
  it then compares the reversed word with the input word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('Expecting: false');
  console.log('=>', isPalindrome('cat'))

  console.log('Expecting:true');
  console.log('=>', isPalindrome('AA'))
}
let pet = 'cat'
console.log(pet.split('').reverse().join(''))

module.exports = isPalindrome;
