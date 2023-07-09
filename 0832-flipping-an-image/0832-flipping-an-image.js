var flipAndInvertImage = function(image) {
  var rev = [];
    for(var i = 0 ; i<image.length ; i++){
      rev.push(image[i].slice().reverse());
    }
    for(var i = 0 ; i<rev.length ; i++){
      for(var j = 0 ; j<rev[i].length ; j++){
        if(rev[i][j] === 0){
          rev[i][j] = 1;
        }else{
          rev[i][j] = 0;
        }
      }
    }
    return rev;
};
