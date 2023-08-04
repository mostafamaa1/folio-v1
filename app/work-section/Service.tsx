import AnimatedTitle from "../animations/AnimatedTitle";
import ServiceGrid from "./ServiceGrid";



const Service = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-[#F6F4F3] bg-cover bg-center py-20 md:py-20 lg:py-24"
      id="services"
    >
       <AnimatedTitle
          text={
            "SERVICES"
          }
          className={
            "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#363130] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
      {/* <h2 className="mb-16 text-[42px] text-[#e4ded7] md:mb-16 md:text-[56px] lg:mb-20 lg:text-[72px]">
        Services
      </h2> */}

     <ServiceGrid />

    </section>
  );
};

export default Service;