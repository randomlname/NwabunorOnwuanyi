import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink, FaArrowRight, FaGooglePlay, FaAppStore } from 'react-icons/fa';
import projectData from '../project/Projects.json';

type project = { 
                  id: number; title: string; description: string; 
                  techStackImgUrl: string; alt: string; path: string; githubUrl: string; 
                  webUrl: string; appleStoreUrl: string;  googleStoreUrl: string; status: string; 
                };
type ProjectData = { Projects: project[] };

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<project[]>([]);

  const TechIcon = ({ alt, src }: { alt: string, src: string }) => (
    <div className="relative flex flex-col items-center group">
      <img src={src} alt={alt} width="170" className='my-4 lg:my-0'/>
      <span className="absolute bottom-0 items-center mb-6 hidden group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{alt}</span>
        <span className="absolute z-10 w-3 h-3 bg-black rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
      </span>
    </div>
  );

  useEffect(() => {
    const data: ProjectData = projectData as ProjectData;
    const projectsArray = data.Projects;

    if (projectsArray) {
      setProjects(projectsArray);
    } else {
      console.error('Projects not found');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="space-y-4">
        {projects.map(project =>
          <div key={project.id} className="projectDiv p-4 shadow rounded-3xl bg-gray-200">
            <h2 className="text-xl font-semibold">{project.title}  
                { project.status === "Archived" ? ( <span className='projectArchive rounded-3xl bg-gray-400 p-1 ml-3 text-sm'>{project.status}</span> ) : (<span></span>) }
            </h2>
            <p className='my-5'>
              {project.description}
            </p>
            <div className="flex items-center">
              <span className="mr-2">Project uses:</span>
              <TechIcon alt={project.alt} src={project.techStackImgUrl}/>
            </div>
            <div className="mt-4 flex justify-end items-center lg:space-x-3">
              {project.webUrl && (
                <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                  <FaLink className="inline mb-1" />Website
                </a>
              )}
              {project.appleStoreUrl && (
                <a href={project.appleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                  <FaAppStore className="inline mb-1" />Apple Store
                </a>
              )}
              {project.googleStoreUrl && (
                <a href={project.googleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                  <FaGooglePlay className="inline mb-1" />Google Store
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                  <FaGithub className="inline mb-1" />GitHub
                </a>
              )}
              {project.path && (
                <Link to={project.path} className="inline-block text-blue-700 hover:text-blue-500 text-lg linkMoreInfo">
                  More Info <FaArrowRight className="inline" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;