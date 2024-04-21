import React from "react";
import Image from "next/image";

const ProjectMaker = (props: { name: any; description: any; path: any; href: any; }) => {
  const { name, description, path, href } = props;

  return (
    <div className="card card-compact w-full sm:w-[400px] md:w-[500px]  border-2 border-transparent hover:border-white bg-slate-400 bg-opacity-30 hover:text-blue-10 rounded-sm">
      <figure>
        <Image
          src={path}
          alt={name}
          width={500}
          height={200}
        />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title font-dmono">{name}</h2>
        <p className="regular-14 font-mono">{description}</p>
        <a href={href}  target="_blank"><button className="btn btn-accent text-white font-mono">More</button></a>
      </div>
    </div>
  );
};

export default ProjectMaker;
