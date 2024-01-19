/* eslint-disable react/prop-types */
export const DefaultCard = (props) => {
  const { header, children } = props;
  return (
    <>
      <div className="container m-4">
        <div className="relative flex max-w-screen-md flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
              {header}
            </h5>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
