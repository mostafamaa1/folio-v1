/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/hadid2.jpg";
import { InstaIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import AnimatedTitle from "../animations/AnimatedTitle";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[80vh] w-full items-stretch justify-center bg-[#363130] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
        
            <AnimatedTitle
            text={'ABOHADID'}
            className={"hidden sm:block lg:block text-2xl text-[#e4ded7] font-medium mb-2"} 
            wordSpace={''} charSpace={''}     />
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://instagram.com/abohadidd"
            target="_blank"
            aria-label="View Insta Profile"
          >
            <motion.div
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <InstaIcon />
            </motion.div>
          </Link>
          {/* <Link
            href="https://www.linkedin.com/in/victor-williams-chukwudi/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.div
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <LinkedinIcon />
            </motion.div>
          </Link> */}
          <Link
            href="https://twitter.com/"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.div
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              <TwitterIcon />
            </motion.div>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}   `}
        >
          <AnimatedWords
            title="HASSAN YOUSIF"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            {/* profile */}
            <Image
              src={profile}
              priority
              alt="Hassan's headshot"
              data-blobity-tooltip="Owner"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px]"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[16px]">
            A Personal Portfolio Featuring Hassan's Work.
          </p>
        </motion.div>

        {/* <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Focused on interfaces and experiences, working remotely from Lagos,
            Nigeria.
          </p>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default Hero;
