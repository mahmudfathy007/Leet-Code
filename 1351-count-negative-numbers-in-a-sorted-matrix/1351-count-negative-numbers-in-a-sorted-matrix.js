
var countNegatives = function(grid) {
  var counter = 0;
  for (var i = 0; i < grid.length; i++) {
    for(var j = 0 ; j<grid[i].length ; j++){
      if(grid[i][j] < 0){
        counter+=1;
      }
    }
  }
  return counter;
};