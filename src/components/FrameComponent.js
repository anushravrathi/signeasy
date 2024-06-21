import EditIcon from "./EditIcon";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.625rem] text-left text-[3rem] text-white font-pattaya ${className}`}
    >
      <div className="flex flex-col items-start justify-start relative">
        <h1 className="m-0 relative text-inherit font-normal font-inherit z-[3] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
          S gnEasy
        </h1>
        <EditIcon
          edit="/edit-1@2x.png"
          propHeight="calc(100% - 12.3px)"
          propTop="0.375rem"
          propBottom="0.394rem"
          propLeft="0.313rem"
          propMaxHeight="100%"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
