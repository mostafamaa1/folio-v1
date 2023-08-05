import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";
import imge from "./image-3.jpg"
import imge2 from "./image2.png"

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#F6F4F3] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <h1
          className=
            "mb-10 text-left text-[35px] font-bold leading-[0.9em] tracking-tighter text-[#363130] sm:text-[40px] md:mb-16 md:text-[50px] lg:text-[70px]"
         >I CRAFT STUNNING CONTENT, EMPOWERS WEBSITES, AND CAPTIVATES AUDIENCES.</h1>

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#363130] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <p>My passion lies in creating software that solves real-world problems and positively impacts people’s lives.</p>
            <p>In addition to my work in software development, I’m also an active leader and member of tech communities on campus, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors.</p>
            <p>Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations.</p>
            {/* <AnimatedBody
              text={
                "Whether I’m designing a sleek user interface or coding a complex application, I’m always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "In addition to my work in software development, I’m also an active leader and member of tech communities on campus, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors."
              }
            />
            
            <AnimatedBody
              text={
                "Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            /> */}
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <Image src={imge2} className="rounded-xl mr-6 p-6" alt={'Street art'} />
            <Image src={imge} className="rounded-xl p-6" alt={'Street art'} />
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#363130] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
