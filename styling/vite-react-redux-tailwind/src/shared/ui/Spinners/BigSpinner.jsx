/* eslint-disable react/prop-types */
export const BigSpinner = (props) => {
  return (
    <div
      {...props}
      className="m-2 flex h-24 w-auto justify-center -translate-x-12"
    >
      <div className="relative">
        <div className="absolute h-24 w-24 rounded-full border border-solid border-gray-200"></div>
        <div className="absolute h-24 w-24 animate-spin rounded-full border border-solid border-yellow-500 border-t-transparent"></div>
      </div>
    </div>
  );
};
