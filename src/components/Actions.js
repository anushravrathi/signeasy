import { Button } from "@mui/material";
import PropTypes from "prop-types";

const Actions = ({ className = "" }) => {
  return (
    <div
      className={`w-[74.063rem] flex flex-row items-start justify-center py-[0rem] pr-[0rem] pl-[0.375rem] box-border max-w-full ${className}`}
    >
      <div className="w-[29.688rem] flex flex-row items-start justify-start gap-[3.437rem] max-w-full mq450:flex-wrap mq750:gap-[1.688rem]">
        <Button
          className="h-[6rem] flex-[0.5909] min-w-[8.5rem] z-[3] mq450:flex-1"
          endIcon={<img width="24px" height="24px" src="/delete-forever.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "24",
            background: "#fc7575",
            borderRadius: "10px",
            "&:hover": { background: "#fc7575" },
            height: 96,
          }}
        >
          Clear
        </Button>
        <Button
          className="h-[6rem] flex-1 min-w-[8.5rem] z-[3] mq450:flex-1"
          endIcon={<img width="24px" height="24px" src="/get-app.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "24",
            background: "#a6ff9f",
            borderRadius: "10px",
            "&:hover": { background: "#a6ff9f" },
            height: 96,
          }}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
