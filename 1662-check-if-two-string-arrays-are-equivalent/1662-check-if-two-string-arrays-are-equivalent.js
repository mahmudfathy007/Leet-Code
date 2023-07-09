var arrayStringsAreEqual = function(word1, word2) {
  var con1 , con2;
    for(var i = 0 ; i<word1.length ; i++){
      con1+=word1[i];
    }
    for(var i = 0 ; i<word2.length ; i++){
      con2+=word2[i];
    }
    if(con1 === con2){
      return true;
    }
    else{
      return false;
    }
};


