import ProjectCard from "./ProjectCard";
import ServiceCard from "./Services";
import { servicesDetails, Service } from "./projectDetails";
import { useState } from "react";

const ServiceGrid = () => {
  // const [filter, setFilter] = useState(true);

  return (
    <>
      <div className="container py-8 mx-auto w-[90%] sm:w-3/2 md:w-5/2 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesDetails.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </>
  );
};

export default ServiceGrid;
