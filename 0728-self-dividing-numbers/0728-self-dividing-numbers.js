/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var nume = [];

  for (var i = left; i <= right; i++) {
    var digitsArray = i.toString().split('').map(Number);
    if (digitsArray.includes(0)) {
      continue;
    }
    var isSelfDividing = true;
    for (var j = 0; j < digitsArray.length; j++) {
      if (i % digitsArray[j] !== 0) {
        isSelfDividing = false;
        break;
      }
    }

    if (isSelfDividing) {
      nume.push(i);
    }
  }

  return nume;
};
