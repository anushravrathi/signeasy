import { useCallback } from "react";
import EditIcon from "./EditIcon";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const Header1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div
      className={`w-[74.063rem] flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[22.937rem] box-border gap-[10.937rem] max-w-full text-left text-[3rem] text-gold-100 font-pattaya lg:gap-[5.438rem] mq450:gap-[1.375rem] mq750:gap-[2.75rem] mq750:pb-[14.938rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem]">
        <div className="flex flex-row items-start justify-start relative">
          <a className="[text-decoration:none] relative text-[inherit] whitespace-nowrap z-[3] mq450:text-[1.813rem] mq1050:text-[2.375rem]">
            S gnEasy
          </a>
          <EditIcon edit="/edit@2x.png" />
        </div>
        <div className="w-[21.688rem] flex flex-row items-start justify-start gap-[3.375rem] max-w-full text-[1.5rem] text-black font-montserrat mq450:gap-[1.688rem] mq750:hidden">
          <div className="flex flex-col items-start justify-start pt-[1.187rem] px-[0rem] pb-[0rem]">
            <a
              className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[7.063rem] whitespace-nowrap cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </a>
          </div>
          <div className="flex-1 shadow-[4px_4px_0px_5px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gold-200 flex flex-row items-start justify-start pt-[1.187rem] px-[1.25rem] pb-[1.125rem] whitespace-nowrap">
            <div className="h-[4.125rem] w-[11.25rem] relative shadow-[4px_4px_0px_5px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-gold-200 hidden" />
            <a className="[text-decoration:none] relative font-semibold text-[inherit] z-[1]">
              Support Us
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.625rem] box-border max-w-full text-[1.125rem] text-black font-montserrat">
        <div className="flex flex-row items-start justify-start gap-[3.25rem] max-w-full mq450:gap-[1.625rem] mq1050:flex-wrap">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0rem]">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <div className="relative font-medium inline-block min-w-[5.688rem] z-[3]">
                Ink Color :
              </div>
            </div>
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[4]"
              loading="lazy"
              alt=""
              src="/color-lens.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.437rem]">
              <div className="relative font-medium z-[3]">
                Background Color :
              </div>
              <img
                className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[3]"
                loading="lazy"
                alt=""
                src="/color-lens.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.625rem] max-w-full mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
              <div className="relative font-medium inline-block min-w-[5.813rem] z-[3]">
                Font Size :
              </div>
            </div>
            <div className="w-[3.938rem] flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem] box-border text-[1rem]">
              <div className="self-stretch rounded-8xs bg-white flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.312rem] z-[3] border-[1px] border-solid border-black">
                <div className="h-[1.5rem] w-[3.375rem] relative rounded-8xs bg-white box-border hidden z-[1] border-[1px] border-solid border-black" />
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.25rem]">
                    <div className="relative font-medium inline-block min-w-[1.25rem] z-[1]">
                      24
                    </div>
                    <div className="h-[1.056rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border">
                      <div className="w-[0.063rem] h-[1.056rem] relative box-border z-[2] border-r-[1px] border-solid border-silver" />
                    </div>
                  </div>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem] z-[1] ml-[-0.125rem]"
                  loading="lazy"
                  alt=""
                  src="/expand-more.svg"
                />
              </div>
            </div>
            <FrameComponent1 />
          </div>
        </div>
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
