import "./App.css";
function App() {
  const mystyle = {
    color: "black",
    backgroundColor: "azure",
    fontSize: "30px",
    border: "3px solid red",
    padding: "20px",
  };
  return (
    <>
      <h1 className="logo">Hello World!!</h1>
      <p style={{ color: "red", backgroundColor: "yellow" }}>
        {/* the first curly brace is for expression second brace we give it as a javascript object */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa a, maxime
        debitis corporis eius pariatur, accusantium expedita architecto aut sint
        magni voluptate provident perferendis numquam voluptatibus quos delectus
        veritatis. Quam.
      </p>
      <p style={mystyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
    </>
  );
}

export default App;
