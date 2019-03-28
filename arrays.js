/*var thing = "beans";

var carb =[
  'bread',
  'rice',
  'potato'
];

var keto=[
  'peanut',
  'cheese',
  'bacon'
];
function addElementToBeginningOfArray(array1, item){
  console.log(array1.unshift(item));

 }
addElementToBeginningOfArray(carb, thing);*/
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

//var item ="bonbonsiwo";
function addElementToBeginningOfArray(array, element){
  var array1 =[element, ...array];
  return array1;
}
//addElementToBeginningOfArray(chocolateBars, item);
//var item ="bonbonsiwo";
function destructivelyAddElementToBeginningOfArray(array, element){
var array1 = array.unshift(element);
return array;
}
function addElementToEndOfArray(array, element){
  var array1 =[...array, element];
  return array1;
}
function destructivelyAddElementToEndOfArray(array, element){
var array1 = array.push(element);
return array;
}

function accessElementInArray(array, index){
  return array[index];
}
