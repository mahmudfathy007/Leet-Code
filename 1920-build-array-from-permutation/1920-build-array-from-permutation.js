
var buildArray = function(nums) {
  var arr=[];
  for(var i = 0 ; i<nums.length ; i++){
    arr.push(nums[nums[i]]);
  }
  return arr;
};