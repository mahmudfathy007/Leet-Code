var reverseWords = function(s) {
  const words = s.split(' ');
  for(var i = 0 ; i<words.length ; i++){
      words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
};