import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "./EditIcon";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`w-[74.063rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full text-left text-[3rem] text-white font-pattaya mq450:flex-wrap mq450:justify-center ${className}`}
    >
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.625rem]">
        <div
          className="flex flex-col items-start justify-start relative cursor-pointer z-[2]"
          onClick={onLogoContainerClick}
        >
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-[1.813rem] mq1050:text-[2.375rem]">
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
      <div className="flex flex-col items-start justify-start text-center text-[1.5rem] text-black font-montserrat">
        <div className="relative font-medium z-[2] mq450:text-[1.188rem]">
          Anushrav Rathi
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0.625rem] text-[1.125rem]">
          <div className="relative font-light z-[2]">Founder, SignEasy</div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
