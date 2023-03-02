import React, { useState } from "react";
import "./Form.css";

function Form({ list, setList }) {
  const [value, setValue] = useState({
    text: "",
    id: "",
  });
  const inputHandler = (e) => {
    setValue({ ...value, text: e.target.value });
  };
  const submitHandler = (e) => {
    if(value.text!==""){
    e.preventDefault();
    setList([...list, { ...value, id: Date.now() }]);
    setValue({ text: "", id: "" });
  }else{
    alert("Type something")
  }
  }
  return (
    <form
      onSubmit={submitHandler}
      id="Form"
      className="m-4 p-1  d-flex justify-content-between align-items-center ps-4 rounded"
    >
      <input
      placeholder="Create new todos"
        value={value.text}
        onChange={inputHandler}
        type="text"
        className="border-0 input-w-80"
      />
      <button type="submit" className="btn btn-dark p-2">
        add
      </button>
    </form>
  );
}

export default Form;
