
var countDigits = function(num) {
  var digits = num.toString(); 
  var sum = 0;
  
  for(var i = 0 ; i < digits.length ; i++){
    if(num % parseInt(digits[i]) === 0){
      sum++;
    }
  }
  
  return sum;
};
