var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    var highestPowerOfTwo = Math.pow(2, Math.floor(Math.log2(n)));
    return highestPowerOfTwo === n;
};
