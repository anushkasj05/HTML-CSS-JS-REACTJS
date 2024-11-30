// async function display() {
//   return 10;
// }
// // promise is handeled using .then
// display().then((data) => {
//   console.log(data);
// });
// // java script is an asynchronus language
async function display() {
  let table = `<table border="1px" width="600px" bgcolor="lightblue"
<tr bgcolor="yellow">
<th>Name</th>
<th>Age</th>
<th>City</th>
</tr>
`;
  let url = "http://localhost:3000/Students";
  let responseobj = await fetch(url);
  console.log(responseobj);
  let mydata = await responseobj.json();
  console.log(mydata);
  mydata.map((key) => {
    table += `<tr>
    <td>${key.name}</td>
    <td>${key.age}</td>
    <td>${key.city}</td>
    </tr>`;
  });
  table += `</table>`;
  document.getElementById("demo").innerHTML = table;
}
display();
