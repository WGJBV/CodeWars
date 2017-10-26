function insertDash(num) {
  var arr2 = String(num).split('');
  var answer = [];
  for(i = 0;i< arr2.length;i++){
    if(arr2[i] % 2 && parseInt(arr2[i + 1]) % 2){
      arr2[i] = arr2[i] + '-';
      answer.push(arr2[i]);
    }
  }

  return arr2.join('');
}
