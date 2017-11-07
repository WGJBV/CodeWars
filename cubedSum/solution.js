function cubeOdd(arr) {
  let cubedArray = [];
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++){
    cubedArray[i] = Math.pow(arr[i], 3);
    if (!(typeof arr[i] === 'number')){
      return undefined;
    }else if (!(cubedArray[i] % 2 === 0)){
      oddSum += cubedArray[i];
    }
  }
  return oddSum;
}
