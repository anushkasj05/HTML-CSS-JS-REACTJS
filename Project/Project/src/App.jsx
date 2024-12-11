import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/header";
import Third from "./components/Third";
const App = () => {
  const myperson = {
    name: "Divyansh",
    age: 21,
    occupation: "Web Developer",
  };
  const details = {
    name: "Divyansh",
    course: "Python full stack",
    duration: "6 months",
  };
  return (
    <div>
      <Navbar />
      <Header data="Anushka" />
      {/* <Header data="Divyansh" /> {/* <Header data={myperson} /> */}
      <Header data={details} />
    </div>
  );
};

export default App;
