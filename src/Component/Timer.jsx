import React, { useRef, useState } from "react";

function Timer() {
  const [names, setNames] = useState([]);
  const nameRef = useRef();
  function addName() {
    const userEnteredValue = nameRef.current.value;
    setNames([...names, userEnteredValue]);
  }

  return (
    <>
      <h1>Names</h1>
      <div>
        {names.map((ele) => {
          return <p>{ele}</p>;
        })}
      </div>
      <input type={"text"} ref={nameRef} />
      <button onClick={addName}>Add Name</button>
    </>
  );
}

export default Timer;
