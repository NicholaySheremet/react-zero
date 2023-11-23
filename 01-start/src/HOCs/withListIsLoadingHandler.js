import React from "react";

const withListIsLoadingHandler = (Component) => (props) => {
  const { isLoading } = props;
  if (isLoading) return <p>Loading data</p>;

  return <Component {...props} />;
};

export default withListIsLoadingHandler;