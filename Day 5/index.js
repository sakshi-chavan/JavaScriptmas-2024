let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"]
];
function findAnagrams(array) {
  return array.filter(pair => {
      const str1 = pair[0].toLowerCase().split(' ').join('').split('').sort().join('');
      const str2 = pair[1].toLowerCase().split(' ').join('').split('').sort().join('');
      return str1 === str2;
  });
}
console.log(findAnagrams(anagrams));
    



 
