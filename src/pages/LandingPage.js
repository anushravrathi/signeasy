import Header1 from "../components/Header1";
import Actions from "../components/Actions";
import FrameComponent from "../components/FrameComponent";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start py-[3.125rem] pr-[1.562rem] pl-[1.25rem] box-border gap-[15.75rem] leading-[normal] tracking-[normal] text-center text-[1.5rem] text-black font-montserrat lg:gap-[7.875rem] mq450:gap-[1.938rem] mq750:gap-[3.938rem]">
      <Header1 />
      <Actions />
      <div className="w-full h-[80.875rem] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem]">
        <img
          className="absolute top-[61.813rem] left-[0rem] w-[90rem] h-[19.5rem]"
          alt=""
          src="/design-element.svg"
        />
        <img
          className="absolute top-[69.188rem] left-[71.688rem] w-[8.625rem] h-[5.438rem] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
        <img
          className="absolute top-[0rem] left-[-2.312rem] w-[94.688rem] h-[82.031rem] z-[2]"
          alt=""
          src="/emojis.svg"
        />
        <div className="absolute top-[15.25rem] left-[14.313rem] rounded-[40px] box-border w-[61.438rem] h-[33.188rem] z-[3] border-[4px] border-solid border-black" />
        <div className="absolute top-[10.938rem] left-[24.875rem] rounded-8xs bg-red box-border w-[1.688rem] h-[1.5rem] z-[5] border-[1px] border-solid border-black" />
        <div className="absolute top-[11rem] left-[41.438rem] rounded-8xs bg-white box-border w-[1.688rem] h-[1.5rem] z-[4] border-[1px] border-solid border-black" />
      </div>
      <div className="w-[74.063rem] flex flex-row items-end justify-between gap-[1.25rem] max-w-full mq450:flex-wrap mq450:justify-center">
        <FrameComponent />
        <div className="flex flex-col items-start justify-start">
          <div className="relative font-medium z-[1] mq450:text-[1.188rem]">
            Anushrav Rathi
          </div>
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.687rem] pl-[0.625rem] text-[1.125rem]">
            <div className="relative font-light z-[1]">Founder, SignEasy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
