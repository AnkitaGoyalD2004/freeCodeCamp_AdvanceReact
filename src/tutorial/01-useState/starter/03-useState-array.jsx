import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = () => {};
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        //console.log(person);
        return (
          <div key={id}>
            <h4>{name} </h4>
            <button type="button">remove</button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={clearAllItems}
      >
        clearItems
      </button>
    </div>
  );
};

export default UseStateArray;
