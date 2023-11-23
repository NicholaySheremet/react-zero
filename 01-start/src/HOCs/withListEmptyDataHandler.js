import React from "react";

const withListEmptyDataHandler = (Component) => (props) => {
  const { data } = props;
  if (data.length === 0) return <p>Data is empty</p>;

  return <Component {...props} />;
};

export default withListEmptyDataHandler;