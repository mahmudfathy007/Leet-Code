var smallerNumbersThanCurrent = function(nums) {
    var counter =0;
    var sm=[];
    for(var i = 0 ; i<nums.length ; i++){
      var counter =0;
      for(var j = 0 ; j<nums.length ; j++){
        if(nums[j] < nums[i]){
          counter+=1;
        }
      }
      sm.push(counter);
    }
    return sm;
};