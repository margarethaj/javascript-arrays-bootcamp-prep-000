var chocolateBars = [
  'snickers', 'hundred grand', 'kitkat', 'skittles'
];

function addElementToBeginningOfArray(array, element){
  var temp = [element, ...array]
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
