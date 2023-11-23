import React from "react";

const withListData = (Component) => (props) => {
  const { data, isLoading } = props;
  if (isLoading) return <p>Loading data</p>;
  if (!data || Array.isArray(data) === false) return <p>There is no data</p>;
  if (data.length === 0) return <p>Data is empty</p>;

  return <Component {...props} />;
};

export default withListData;