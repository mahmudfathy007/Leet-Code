var truncateSentence = function(s, k) {
  const substrings = s.split(" ");
  var neewstr = [];
  for (var i = 0; i < k; i++) {
    neewstr[i]=substrings[i];
  }
  return neewstr.join(" ");
};