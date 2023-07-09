var getConcatenation = function(nums) {
  var arr=[];
  for(var i = 0 ; i<nums.length ; i++){
    arr.push(nums[i]);
  }
  for(var i = 0 ; i<nums.length ; i++){
    arr.push(nums[i]);
  }
  
  return arr;
};

var nums = [1,2,1];

console.log(getConcatenation(nums));


