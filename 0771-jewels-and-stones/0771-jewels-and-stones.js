/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  var counter = 0;
    for(var i = 0 ; i<jewels.length ; i++){
      for(var j = 0  ; j<stones.length ; j++){
        if(jewels[i] === stones[j]){
          counter++;
        }
      }
    }
    return counter;
};