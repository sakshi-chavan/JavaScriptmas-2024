const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

/* 
1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.

Example input: ":cry:"
Example output: ‍😄
*/

function emojifyWord(word){
    if (word.startsWith(':') && word.endsWith(':')) {
      const key = word.slice(1, -1);
      return hackedEmojis[key] || word; 
    }
   return word;
}
console.log(emojifyWord(":man_facepalming:"));

/* 
2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/ 

function emojifyPhrase(phrase){
  let words = phrase.split(' '); 
  let convertedWords = words.map(emojifyWord); 
  return convertedWords.join(' '); 
}
console.log(emojifyPhrase("Just read your article :thumbsdown:"));

