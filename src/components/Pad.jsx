import PropTypes from "prop-types";

export const Pad = ({ text, style, id, handleClick }) => {
  return (
    <>
      <button
        id={id}
        value={text}
        className={`text-white  text-xl uppercase border border-black ${style}  font-bold hover:bg-black hover:border-white`}
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

Pad.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
