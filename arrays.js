var chocolateBars = [
  "snickers", "hundred grand", "kitkat", and "skittles"
]

function addElementToBeginningOfArray(array, element){
  return [element, ..array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array
}

function addElementToEndOfArray(array, element){
  return [..array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array
}
