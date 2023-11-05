import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Abhay",
    age: 20,
    hobby: "Watching Anime",
  });

  const displayPerson = () => {
    setPerson({ name: "tashu", age: 19, hobby: "playing guitar" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Abhay Dutt
      </button>
    </>
  );
};

export default UseStateObject;
