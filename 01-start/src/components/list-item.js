import React from "react";

function ListItem({ item = null }) {
  return (
    <li>
      <p>item {item}</p>
    </li>
  );
}

export default ListItem;
