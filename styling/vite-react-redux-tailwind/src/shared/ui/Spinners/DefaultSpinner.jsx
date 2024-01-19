/* eslint-disable react/prop-types */
export const DefaultSpinner = (props) => {
  return (
    <div {...props} className="m-2 flex h-12 w-auto justify-center -translate-x-6">
      <div className="relative">
        <div className="absolute h-12 w-12 rounded-full border border-solid border-gray-200"></div>
        <div className="absolute h-12 w-12 animate-spin rounded-full border border-solid border-yellow-500 border-t-transparent"></div>
      </div>
    </div>
  );
};
