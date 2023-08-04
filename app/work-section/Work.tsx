import AnimatedTitle from "../animations/AnimatedTitle";
import ProjectGrid from "./ProjectGrid";

 const Work = () => {
  // const list = [
  //   {
  //     title: "Orange",
  //     img: "./suit.jpg",
  //     price: "$5.50",
  //   },
  //   {
  //     title: "Tangerine",
  //     img: "./../../public/projects/skywatch-new.webp",
  //     price: "$3.00",
  //   },
  //   {
  //     title: "Raspberry",
  //     img: ".//../../public/projects/alpaca-new.webp",
  //     price: "$10.00",
  //   },
  //   {
  //     title: "Lemon",
  //     img: ".//../../public/projects/alpaca-new.webp",
  //     price: "$5.30",
  //   },
  //   {
  //     title: "Avocado",
  //     img: ".//../../public/projects/alpaca-new.webp",
  //     price: "$15.70",
  //   },
  // ];

  return (
    <section
          className="relative z-10 flex w-full flex-col items-center justify-center bg-[#F6F4F3] bg-cover bg-center py-16 md:py-20 lg:py-20"
          id="work"
        >
          <div className="container mx-auto">

          <AnimatedTitle
          text={
            "PROJECTS"
          }
          className={
            "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#363130] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
          />
    
          <ProjectGrid />
  
          </div>
      </section>
  );
 }

export default Work;
