/* eslint-disable react/prop-types */
export const SmallSpinner = (props) => {
  return (
    <div {...props} className="m-2 flex h-6 w-auto justify-center -translate-x-3">
      <div className="relative">
        <div className="absolute h-6 w-6 rounded-full border border-solid border-gray-200"></div>
        <div className="absolute h-6 w-6 animate-spin rounded-full border border-solid border-yellow-500 border-t-transparent"></div>
      </div>
    </div>
  );
};
