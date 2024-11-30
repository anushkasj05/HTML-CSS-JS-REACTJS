async function recdel(id) {
  let url = `http://localhost:3000/Students${id}`;
  let resobj = await fetch(url, {
    method: "DELETE",
  });
  let data = resobj.json();
  console.log(data);
  alert("DATA SUCCESSFULLY DELETED");
}
async function display() {
  let table = `
    <table>
    <tr>
    <th>name</th>
    <th>age</th>
    <th>city</th>
    </tr>
    </table>`;
  let url = "http://localhost:3000/Students";
  let resobj = await fetch(url);
  console.log(resobj);
  let data = await resobj.json();
  console.log(data);
  data.map(
    (key) =>
      (table += `
  <tr>
  <td><input type="text" value="${key.name}" id="nm-${key.id}"readonly></td>
  <td><input type="text" value="${key.age}" id="ag-${key.id}"readonly></td>
  <td><input type="text" value="${key.city}" id="ct-${key.id}"readonly></td>

  <td>
  <a onclick="recdel('${key.id})"class=button button-delete"}
  </td>
  </tr>
  `)
  );

  document.getElementById("demo").innerHTML = table;
}
display();
