function capitalize(s){
  var capArray = [];
  var returnArray = [];
  capArray = s.split('');
  for (let i = 0; i <s.length; i+2){
    capArray[i].toUpperCase();
  }
  returnArray.push(capArray);
  for (let j = 0; j < s.length; j++){
    capArray[j].toLowerCase();
  }
  for (let k = 1; k < s.length; k+2){
    capArray[k].toUpperCase();
  }
  returnArray.push(capArray);
  return returnArray;
};
