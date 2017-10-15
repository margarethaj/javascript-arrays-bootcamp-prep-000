var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
];

function addElementToBeginningOfArray(array, element){
  var temp = array.unshift(element);
  return temp
}
/*


function destructivelyAddElementToBeginningOfArray(array, element){
  return array
}

function addElementToEndOfArray(array, element){
  return [..array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array
}*/
