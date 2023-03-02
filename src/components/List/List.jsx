import React from "react";
import ListItem from "../ListItem/ListItem";

function List({ list, setList }) {
  return (
    <ul className="px-4">
      {list.map((item) => (
        <ListItem key={item.id} {...item} list={list} setList={setList} />
      ))}
    </ul>
  );
}

export default List;
