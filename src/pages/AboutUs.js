import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start py-[3.125rem] pr-[1.562rem] pl-[1.25rem] box-border gap-[11.562rem] leading-[normal] tracking-[normal] text-left text-[2.25rem] text-black font-montserrat lg:gap-[5.75rem] mq450:gap-[1.438rem] mq750:gap-[2.875rem]">
      <div className="w-full h-[82.819rem] absolute !m-[0] right-[0rem] bottom-[0rem] left-[0rem]">
        <img
          className="absolute top-[63.756rem] left-[0rem] w-[90rem] h-[19.5rem]"
          alt=""
          src="/design-element.svg"
        />
        <img
          className="absolute top-[0rem] left-[-2.25rem] w-[94.688rem] h-[82.031rem] z-[1]"
          alt=""
          src="/emojis1.svg"
        />
        <img
          className="absolute top-[71.131rem] left-[71.688rem] w-[8.625rem] h-[5.438rem] object-contain z-[2]"
          loading="lazy"
          alt=""
          src="/group-1@2x.png"
        />
      </div>
      <Header />
      <div className="w-[74.063rem] flex flex-row items-start justify-center pt-[0rem] pb-[6rem] pr-[0rem] pl-[0.375rem] box-border max-w-full mq450:pb-[2.5rem] mq450:box-border mq1050:pb-[3.875rem] mq1050:box-border">
        <div className="w-[50.938rem] flex flex-col items-start justify-start gap-[3.937rem] max-w-full mq450:gap-[1rem] mq1050:gap-[1.938rem]">
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-[1.375rem] mq1050:text-[1.813rem]">
            About Us
          </h1>
          <b className="self-stretch relative text-[1.125rem] z-[2]">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              non hendrerit libero, ac facilisis libero. Ut eu eros libero.
              Vestibulum id velit leo. Donec auctor leo lacinia, luctus risus a,
              imperdiet enim. Duis efficitur metus sed tempus suscipit. Quisque
              felis libero, rutrum et ultricies facilisis, fringilla vel mauris.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Integer a vulputate metus.
              Vestibulum varius tincidunt ante. Suspendisse laoreet eleifend
              ligula euismod faucibus.
            </p>
            <p className="m-0">
              Praesent tincidunt vel neque ac volutpat. Aliquam eget fermentum
              lacus, sed tristique magna. In in leo id enim ultrices ultricies.
              Sed placerat pretium egestas. In ornare nisl nec purus gravida,
              sed gravida velit iaculis. Maecenas iaculis commodo mi sit amet
              accumsan. Curabitur ac leo at libero tempus congue vel et ex. Sed
              et nunc maximus, venenatis magna sit amet, luctus nisi.
              Pellentesque non augue metus. Nunc congue dolor a sem suscipit
              vehicula. Integer eleifend finibus risus. Nam efficitur ligula
              quis tempus sodales. Ut ut magna eu velit porta gravida eget non
              quam. Praesent vel tristique nisl.
            </p>
            <p className="m-0">
              Ut volutpat dapibus urna ut mollis. Pellentesque erat lorem,
              iaculis et volutpat non, pulvinar vel nulla. Integer placerat,
              tortor nec faucibus consequat, libero arcu dignissim lorem, quis
              commodo sapien metus ac nunc. Donec a diam malesuada, eleifend
              sapien et, tempus augue. Curabitur sed justo nisl. Mauris in
              venenatis leo, nec pellentesque felis. Phasellus a dignissim
              massa. Integer ut finibus ex, quis lacinia enim.
            </p>
            <p className="m-0">
              Phasellus egestas libero at erat pharetra molestie. Donec ut
              fermentum lectus. Nulla fermentum turpis ligula, vel auctor diam
              pellentesque eu. Nam et justo massa. Maecenas ut lectus risus. Sed
              porttitor massa neque, vitae vestibulum augue semper ut. Nam justo
              nisl, lacinia vitae lectus sed, ornare convallis enim. Mauris
              tristique mollis ipsum quis pulvinar. Maecenas tincidunt sodales
              vestibulum. Nulla eu fringilla velit. Praesent id justo aliquam,
              malesuada lacus vel, auctor leo.
            </p>
          </b>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
