import React from "react";
import Image from "next/image";
import ProjectItems from "./ProjectItems";
import menteeDashboard from "../public/Assets/Projects/Mentee/dashboard.png";
import homeEaseLanding from "../public/Assets/Projects/HomeEase/landingpage.png";
import marcyMerchProducts from "../public/Assets/Projects/MarcyMerch/products.png";
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2929ac]">
          Projects
        </p>
        <h2 className="py-4">What I've build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItems
            title="Mentee."
            backgroundImg={menteeDashboard}
            projectUrl="/mentee"
          />
          <ProjectItems
            title="HomeEase"
            backgroundImg={homeEaseLanding}
            projectUrl="/homease"
          />
          <ProjectItems
            title="Marcy Merch"
            backgroundImg={marcyMerchProducts}
            projectUrl="/marcymerch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
