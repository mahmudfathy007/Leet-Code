
var subtractProductAndSum = function(n) {
    let digits = [];
    let sum = 0;
    let prod = 1;
    var res;
    while (n > 0) {
      let digit = n % 10;
      digits.unshift(digit);
      n = Math.floor(n / 10);
    }
    
    for(var i = 0 ; i<digits.length ; i++){
        sum+=digits[i];
        prod = prod*digits[i];
    }
    res = prod - sum;
    return res;
};