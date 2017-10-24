function abbrevName(name){
  var newName = name.split(' ');
  return `${newName[0][0].toUpperCase()}.${newName[1][0].toUpperCase()}`;
}
