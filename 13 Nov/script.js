// regular function
function display() {
  console.log("hello world from regular function");
}
display();
// regular expression
let display1 = function () {
  console.log("hello world from regular expression");
};
display1();
// arrow function
const display2 = () => {
  console.log("hello world from arrow function");
};
display2();
// const display3 = () => console.log("hello world from shortest arrow function");
const display3 = (name) =>
  console.log(`hello ${name} from shortest arrow function`);
// display3();
display3("Divyansh Chaubey");
function hello1() {
  document.getElementById("demo").innerHTML = this;
}
function hello2() {
  document.getElementById("demo").innerhtml = this;
}
window.addEventListener("load", hello1);
document.getElementById("btn").addEventListener("click", hello1);
