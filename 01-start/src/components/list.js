import React from "react";
import ListItem from "./list-item";

function List({ data = [] }) {
  return (
    <>
      <ul>
        {data.map((item) => {
          return <ListItem key={`${item}`} item={item} />;
        })}
      </ul>
    </>
  );
}

export default List;
