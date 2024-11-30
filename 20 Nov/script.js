/*
map method performs a function on each element of the array and returns a new array
a map method performs an operation or function on each element of an array and returns a new array with those values
map is a higher order function
higher order function is a function in which another function is called as an arguement .  
*/
const students = [
  { name: "Anushka", age: 19, city: "Bhopal" },
  { name: "Divyansh", age: 21, city: "Lalitpur" },
  { name: "Argha", age: 19, city: "Bhopal" },
];

let table = `<table border="1px" width="600px" bgcolor="lightblue"
<tr bgcolor="yellow">
<th>Name</th>
<th>Age</th>
<th>City</th>
</tr>
`;

students.map((key) => {
  table += `
    <tr>
    <td>${key.name}</td>
    <td>${key.age}</td>
    <td>${key.city}</td>
    </tr>
    `;
});

table += `table`;
document.getElementById("demo").innerHTML = table;
/*
PROMISE 
=>successful
=>pending
=>rejected
promise when successful returns response object
promise when pending returns an error or the message to be displayed
promise when failed/rejected returns error
fetch and asynch await returns a promise
*/
