import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink, FaArrowRight, FaGooglePlay, FaApple, FaBacon } from 'react-icons/fa';
import projectData from '../project/Projects.json';
import '../css/index.css'

type project = { 
                  id: string; title: string; description: string; 
                  techStackImgUrl: string; alt: string; path: string; githubUrl: string; 
                  webUrl: string; appleStoreUrl: string;  googleStoreUrl: string; status: string;
                  backgroundImage: string;
                };
type ProjectData = { Projects: project[] };

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<project[]>([]);
  const [expandedIds, setExpandedIds] = useState<string[]>([]);
  const toggleExpand = (id: string) => {
    setExpandedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return [];
      }
      return [id];
    });
  };

  const TechIcon = ({ alt, src }: { alt: string, src: string }) => (
    <div className="relative flex flex-col items-center group">
      <img src={src} alt={alt} width="170" className='my-1 lg:my-0'/>
      <span className="absolute bottom-0 items-center mb-3 hidden group-hover:flex">
        <span className="relative z-10 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{alt}</span>
        <span className="absolute z-10 w-3 bg-black rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
      </span>
    </div>
  );

  useEffect(() => {
    const data: ProjectData = projectData as ProjectData;
    const projectsArray = data.Projects;
    setProjects(projectsArray);
  }, []);

  return (
    <div className="container mx-auto px-10 lg:px-0 my-10">
      <div className="space-y-2">
        <div className='items-center justify-center'>
          <h4 className="text-xl font-semibold">Select a project for more info</h4>
        </div>
        {projects.map(project => (
          <div key={project.id} className="projectDiv p-4 shadow rounded-3xl" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + project.backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
            <div onClick={() => toggleExpand(project.id)} className="cursor-pointer">
              <h2 className="text-xl font-semibold">
                <span className="projectIDCircle">{project.id}</span> {project.title}
                {project.status === "Archived" && (
                  <span className='projectArchive rounded-3xl bg-gray-400 p-1 px-2 ml-3 text-sm'>{project.status}</span>
                )}
                <div className='moreInfoContainer' style={{ opacity: expandedIds.includes(project.id) ? 0 : 1 }}>
                    <div className="lg:mt-2 flex justify-end items-center space-x-1 lg:space-x-3">
                      {!project.webUrl && !project.appleStoreUrl && !project.googleStoreUrl && !project.githubUrl && !project.path &&  (
                        <a href={'/projects'} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link invisible">
                          <FaBacon className="inline mb-1 ml-4 lg:ml-0" />
                        </a>
                      )}
                      {project.webUrl && (
                        <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                          <FaLink className="inline mb-1 ml-4 lg:ml-0" /><span className="text-sm ml-5 lg:ml-0"> Website</span>
                        </a>
                      )}
                      {project.appleStoreUrl && (
                        <a href={project.appleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                          <FaApple className="inline mb-1 ml-2 lg:ml-0" /><span className="text-sm"> Apple Store</span>
                        </a>
                      )}
                      {project.googleStoreUrl && (
                        <a href={project.googleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                          <FaGooglePlay className="inline mb-1 ml-2 lg:ml-0" /><span className="text-sm"> Google Store</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                          <FaGithub className="inline mb-1 ml-3 lg:ml-0" /><span className="text-sm"> GitHub</span>
                        </a>
                      )}
                      {project.path && (
                        <Link to={project.path} className="inline-block text-blue-700 hover:text-blue-500 text-lg linkMoreInfo">
                          <span className="text-sm">Notes</span> <FaArrowRight className="inline ml-3 lg:ml-0"/>
                        </Link>
                      )}
                  </div>
                </div>
              </h2>
            </div>
            <div className={`collapse-content ${expandedIds.includes(project.id) ? 'expanded' : 'collapsed'}`} style={{ opacity: expandedIds.includes(project.id) ? 1 : 0 }}>
              <div className='px-10 lg:my-5'>
                <p className='text-sm'> {project.description} </p>
                <div className="flex items-center">
                  <span className="mr-2 my-3 underline">Project uses:</span>
                  <TechIcon alt={project.alt} src={project.techStackImgUrl}/>
                </div>
              </div>
              <div className="lg:mt-2 flex justify-end items-center space-x-1 lg:space-x-3">
                {project.webUrl && (
                  <a href={project.webUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                    <FaLink className="inline mb-1 ml-4 lg:ml-0" /><span className="text-sm ml-5 lg:ml-0"> Website</span>
                  </a>
                )}
                {project.appleStoreUrl && (
                  <a href={project.appleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                    <FaApple className="inline mb-1 ml-2 lg:ml-0" /><span className="text-sm"> Apple Store</span>
                  </a>
                )}
                {project.googleStoreUrl && (
                  <a href={project.googleStoreUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                    <FaGooglePlay className="inline mb-1 ml-2 lg:ml-0" /><span className="text-sm"> Google Store</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 text-xl link">
                    <FaGithub className="inline mb-1 ml-3 lg:ml-0" /><span className="text-sm"> GitHub</span>
                  </a>
                )}
                {project.path && (
                  <Link to={project.path} className="inline-block text-blue-700 hover:text-blue-500 text-lg linkMoreInfo">
                    <span className="text-sm">Notes</span> <FaArrowRight className="inline ml-3 lg:ml-0"/>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;