import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
      
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-3 lg:max-w-[1200px] lg:grid-cols-2 lg:gap-x-4 mx-auto px-4">
      {devProjects.map((project: ProjectProps) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          available={project.available}   
          />
      ))}
    </div>

    </>
  );
};

export default ProjectGrid;
