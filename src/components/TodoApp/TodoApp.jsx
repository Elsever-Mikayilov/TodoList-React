import React, { useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./TodoApp.css";

function TodoApp() {
  const [list, setList] = useState([]);
  return (
    <div id="TodoApp" className="p-5">
      <h2 className="text-center  text-white">What's the Plan for today ?</h2>
      <Form list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default TodoApp;
