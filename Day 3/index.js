const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

function emojifyWord(word){
    if (word.startsWith(':') && word.endsWith(':')) {
      const key = word.slice(1, -1);
      return hackedEmojis[key] || word; 
    }
   return word;
}
console.log(emojifyWord(":man_facepalming:"));

function emojifyPhrase(phrase){
  let words = phrase.split(' '); 
  let convertedWords = words.map(emojifyWord); 
  return convertedWords.join(' '); 
}
console.log(emojifyPhrase("Just read your article :thumbsdown:"));
