/* eslint-disable react/prop-types */
export const DefaultButton = (props) => {
  const { children = "", onClick = () => {} } = props;
  return (
    <button
      {...props}
      className="select-none rounded-lg bg-blue-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

