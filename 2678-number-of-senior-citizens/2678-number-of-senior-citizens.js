/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  var generalCounter = 0;
    for(var i = 0 ; i<details.length ; i++){
       if(details[i][11] + details[i][12] > 60){
         generalCounter+=1;
       } 
    }
    return generalCounter;
};