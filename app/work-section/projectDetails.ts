

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}


export type ProjectProps = {
  id: number;
  name: string;
  image: string;
  available: boolean;
};


export const servicesDetails: Service[] = [
  {
    id: 1,
    title: 'Film Production',
    description: 'Unleash your imagination with our top-tier film production services, where creative excellence meets cutting-edge technology to bring captivating cinematic stories to life.',
    icon: '🎥',
  },
  {
    id: 2,
    title: 'Modeling',
    description: 'Empowering aspiring models through comprehensive and personalized model management services, guiding their careers to new heights.',
    icon: '🎨',
  },
  {
    id: 3,
    title: 'Photography',
    description: 'Capturing moments that last a lifetime, our photography services offer artistic and professional imagery to preserve your most cherished memories.',
    icon: '📸',
  },
  // Add more services as needed
];


export const devProjects = [
  // {
  //   id: 1,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 2,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-new.webp"),
  //   available: false,
  // },
  {
    id: 1,
    name: "Photography",
    image: require(".//../../public/projects/hadidd.jpeg"),
    available: true,
  },
  // {
  //   id: 2,
  //   name: "Fashion",
  //   image: require(".//../../public/projects/p4.jpg"),
  //   available: true,
  // },
  // {
  //   id: 3,
  //   name: "Modelling",
  //   image: require(".//../../public/projects/p3.jpg"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/p3.jpg"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description:
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description:
//       "An image generator website that allows users to generate, combine, and download images.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description:
//       "A website that reduces the length of your URL using Bit.ly's API",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description:
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
