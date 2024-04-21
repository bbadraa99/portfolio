import React from "react";
import ProjectMaker from "./ProjectMaker";
import { PROJECT_ID } from "@/constants";

// Hover: highligh the project

const Projects = () => {
  
  return (
    <div id="projects" className="py-10 px-10 pb-10">
      <h1 className="bold-32 center py-10 pb-20 text-white font-dmono">03. Personal Projects</h1>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center lg:flex-row gap-8  ">
          <ProjectMaker name={PROJECT_ID[0].name} description={PROJECT_ID[0].description} path={PROJECT_ID[0].path} href={PROJECT_ID[0].href}/>
          <ProjectMaker name={PROJECT_ID[1].name} description={PROJECT_ID[1].description} path={PROJECT_ID[1].path} href={PROJECT_ID[1].href}/>
        </div>
        <div className="py-6 center">
          <ProjectMaker name={PROJECT_ID[2].name} description={PROJECT_ID[2].description} path={PROJECT_ID[2].path} href={PROJECT_ID[2].href}/>
        </div>
      </div>
      
      
    </div>
  );
};

export default Projects;
