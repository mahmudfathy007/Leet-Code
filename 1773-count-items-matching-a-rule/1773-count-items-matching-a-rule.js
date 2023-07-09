var countMatches = function(items, ruleKey, ruleValue) {
    var counter = 0;
    for(var i = 0 ; i<items.length ; i++){
      if(ruleKey == "type"){
        if(ruleValue == items[i][0]){
          counter+=1;
        }
      }
      if(ruleKey == "color"){
        if(ruleValue == items[i][1]){
          counter+=1;
        }
      }
      if(ruleKey == "name"){
        if(ruleValue == items[i][2]){
          counter+=1;
        }
      }
    }
    return counter;
};