/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  var counter = 0;
  while(n > 1) {
    if (n % 2 === 0) {
      counter += n / 2;
      n = n / 2;
    } else {
      counter += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    }
  }
  return counter;
};
