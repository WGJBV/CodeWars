function capitalize(s){
  let capArray = [];
  let returnArray = [];
  let str = '';
  capArray = s.split('');
  for (let i = 0; i < capArray.length; i++){
    if ((i % 2) === 0){
      str += capArray[i].toUpperCase();
    }else {
      str += capArray[i];
    }
  }
  returnArray[0] = str;
  str = '';
  for (let i = 0; i < capArray.length; i++) {
    if ((i % 2) === 0){
      str += capArray[i];
    }else{
      str += capArray[i].toUpperCase();
    }
  }
  returnArray[1] = str;
  return returnArray;
};
