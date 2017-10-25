function abbrevName(name){

  var nameArray = name.split(" ");
  return `${nameArray[0][0].toUpperCase()}.${nameArray[1][0].toUpperCase()}`;
}
