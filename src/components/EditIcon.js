import { useMemo } from "react";
import PropTypes from "prop-types";

const EditIcon = ({
  className = "",
  edit,
  propHeight,
  propTop,
  propBottom,
  propLeft,
  propMaxHeight,
}) => {
  const editIconStyle = useMemo(() => {
    return {
      height: propHeight,
      top: propTop,
      bottom: propBottom,
      left: propLeft,
      maxHeight: propMaxHeight,
    };
  }, [propHeight, propTop, propBottom, propLeft, propMaxHeight]);

  return (
    <img
      className={`h-[calc(100%_-_12.3px)] w-[3.419rem] absolute !m-[0] top-[0.375rem] bottom-[0.394rem] left-[0.313rem] max-h-full overflow-hidden shrink-0 object-contain z-[4] ${className}`}
      loading="lazy"
      alt=""
      src={edit}
      style={editIconStyle}
    />
  );
};

EditIcon.propTypes = {
  className: PropTypes.string,
  edit: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft: PropTypes.any,
  propMaxHeight: PropTypes.any,
};

export default EditIcon;
