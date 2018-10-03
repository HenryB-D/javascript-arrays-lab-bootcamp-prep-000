function destructivelyAppendKitten() {
kittens.push();
return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift();
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
}
