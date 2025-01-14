import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/heart icon.png";
import { InstaIcon, LinkedinIcon, TwitterIcon } from "../Icons";
import { bodyAnimation } from "../animations/animations";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#F6F4F3] bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto  flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-start justify-center ${monaSans.className} relative w-full sm:items-center lg:max-w-[1440px] `}
        >
          <AnimatedWords2
            title={"Let's Talk"}
            style={
              "flex max-w-[500px] flex-col items-start text-left text-[150px] font-extrabold uppercase leading-[0.9em] text-[#363130] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[170px] md:text-[200px] lg:text-center lg:text-[270px] xl:text-[300px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px]"
          />
        </div>

        <div className="mt-20 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, proposal, project, or want to work together on something?"
              }
              className={
                "-mb-1 inline-block text-[#363130] overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
              }
            />
            <Link
              href="mailto:abohadidd6@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
              target="_blank"
              aria-label="Send me an email"
              className="mt-1 w-[147px] flex-1 text-[#363130] underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
            >
              <AnimatedBody text={"Send me an email"} className={"text-[#363130]"} />
            </Link>
          </div>

          <div className="flex gap-10 text-[#363130] mr-16 sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://instagram.com/abohadidd"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.div
              className="text-[16px] font-bold text-[#363130] md:text-[16px]"
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
              className="text-[16px] font-bold text-[#363130] md:text-[16px]"
              variants={bodyAnimation}
            >
              <LinkedinIcon />
            </motion.div>
          </Link> */}
          <Link
            href="https://twitter.com/6hadid"
            target="_blank"
            aria-label="View Twitter Profile"
          >
            <motion.div
              className="text-[16px] font-bold text-[#363130] md:text-[16px]"
              variants={bodyAnimation}
            >
              <TwitterIcon />
            </motion.div>
          </Link>
        </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
