/*
the map() method is used for creating a new array from an existing one,applying a function to each one of the elements of the first array
*/
// map
const numbers = [1, 2, 3, 4, 5];
const newarray = numbers.map(display);
function display(i) {
  return i * 2;
}
console.log(newarray);
