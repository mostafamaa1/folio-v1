import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  image,
  available,
}: ProjectProps) => {
  return (
    
          <div className="group relative justify-center block bg-black">
            <Image
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-fill opacity-75 transition-opacity group-hover:opacity-50"
            />
            {/* <img alt="Developer" src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" /> */}
            <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                Developer
              </p> */}
              <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> 
              <div className="mt-32 sm:mt-48 lg:mt-64">
    
                  <p className="text-sm text-white">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                    perferendis hic asperiores quibusdam quidem voluptates doloremque
                    reiciendis nostrum harum. Repudiandae?
                  </p>
                </div>
              </div>
            </div>
          </div>
       
//     <motion.div
//   style={{
//     backgroundColor: "#212531",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     position: "relative",
//     borderRadius: "10px", // Added a border radius to make the corners rounded
//   }}
//   className={`relative z-10 h-[550px] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] items-stretch justify-center mx-auto overflow-hidden rounded-3xl bg-center py-0 sm:h-[400px] md:h-[350px] lg:h-[400px]`}
//   initial="initial"
//   animate="animate"
// >
//   <Image
//     src={image}
//     alt={name}
//     fill // Image will fill the entire container
//     // objectFit="cover" // Image will maintain aspect ratio and cover the container
//     className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110" // Add a border radius to the image to match the card's rounded corners
//   />
//  <div className="absolute inset-0 flex flex-col justify-end px-4 pb-4 bg-gray-200 bg-opacity-80 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-b-3xl">
//     <AnimatedTitle
//       text={name}
//       className="text-white font-bold text-center text-lg md:text-xl lg:text-2xl p-2"
//       wordSpace="" charSpace=""
//     />
//   </div>
// </motion.div>
  );
};


export default ProjectCard;
