var restoreString = function(s, indices) {
  var newWord = new Array(indices.length);
  for (var i = 0; i < indices.length; i++) {
    newWord[indices[i]] = s[i]; 
  }
  return newWord.join('');
};
