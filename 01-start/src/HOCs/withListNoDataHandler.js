import React from "react";

const withListNoDataHandler = (Component) => (props) => {
  const { data } = props;
  if (!data || Array.isArray(data) === false) return <p>There is no data</p>;

  return <Component {...props} />;
};

export default withListNoDataHandler;