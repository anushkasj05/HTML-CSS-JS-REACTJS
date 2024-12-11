function Header(props) {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.data.name} and your age is {props.data.age} and your
        occupation is of a {props.data.occupation}
      </h1>
      <h1>
        Details <br /> name: {props.data.name} <br /> course:{" "}
        {props.data.course}
      </h1>
      <h1>
        {props.data.name} & {props.data.course} & {props.data.duration}
      </h1>
    </>
  );
}
export default Header;
