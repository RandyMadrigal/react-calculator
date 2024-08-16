import PropTypes from "prop-types";

export const Display = ({ num }) => {
  return (
    <>
      <div
        id="display"
        className=" w-full place-content-center overflow-hidden text-end text-white bg-gray-950 px-5 py-1 col-span-4"
      >
        {num}
      </div>
    </>
  );
};

Display.propTypes = {
  num: PropTypes.string.isRequired,
};
