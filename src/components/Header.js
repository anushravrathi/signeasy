import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "./EditIcon";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`w-[74.063rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full text-left text-[3rem] text-gold-100 font-pattaya mq750:w-[52.375rem] ${className}`}
    >
      <div
        className="flex flex-row items-start justify-start relative cursor-pointer z-[2]"
        onClick={onLogoContainerClick}
      >
        <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap">
          S gnEasy
        </a>
        <EditIcon
          edit="/edit@2x.png"
          propHeight="calc(100% - 12.3px)"
          propTop="0.375rem"
          propBottom="0.394rem"
          propLeft="0.313rem"
          propMaxHeight="100%"
        />
      </div>
      <div className="w-[21.688rem] flex flex-row items-start justify-start gap-[3.375rem] max-w-full text-[1.5rem] font-montserrat mq450:gap-[1.688rem] mq750:hidden">
        <div className="flex flex-col items-start justify-start pt-[1.187rem] px-[0rem] pb-[0rem]">
          <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[7.063rem] whitespace-nowrap z-[2]">
            About Us
          </a>
        </div>
        <Button
          className="h-[4.125rem] flex-1 shadow-[4px_4px_0px_5px_rgba(0,_0,_0,_0.25)] z-[2]"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "24",
            background: "#ffc700",
            borderRadius: "10px",
            "&:hover": { background: "#ffc700" },
            height: 66,
          }}
        >
          Support Us
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
