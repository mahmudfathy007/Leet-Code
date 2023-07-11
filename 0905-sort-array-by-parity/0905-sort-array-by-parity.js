var sortArrayByParity = function(nums) {
  var sor = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sor.push(nums[i]);
      nums.splice(i, 1);
      i--;
    }
  }
  return sor.concat(nums);
};
