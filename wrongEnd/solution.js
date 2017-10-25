function fixTheMeerkat(arr) {
 let placeHolder = arr[0];
 arr[0] = arr[2];
 arr[2] = placeHolder;
 return arr;
}
