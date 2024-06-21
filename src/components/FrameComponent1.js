import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[0.375rem] text-left text-[1.125rem] text-black font-montserrat ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
        <div className="relative font-medium z-[3]">
          Transparent Background :
        </div>
      </div>
      <img
        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[3]"
        loading="lazy"
        alt=""
        src="/check-box.svg"
      />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
