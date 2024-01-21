import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaArrowRight } from 'react-icons/fa'; 

const Projects: React.FC = () => {

  const TechIcon = ({ alt, src }: { alt: string, src: string }) => (
    <div className="relative flex flex-col items-center group">
      <img src={src} alt={alt} width="150" className='my-4 lg:my-0'/>
      <span className="absolute bottom-0 items-center mb-6 hidden group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{alt}</span>
        <span className="absolute z-10 w-3 h-3 bg-black rotate-45 transform -translate-x-1/2 -translate-y-1/2"></span>
      </span>
    </div>
  );

  const projects = [
    {
      id: 2,
      title: 'Budget application',
      description: `I wanted to test my skill in building a complex application. The idea for this app is stright forward. It will enable the user to monitor transactions ` + 
                    `by adding or removing them as well as a budget tab to help users see their goal and monitor monthly payments.`,
      techStackImgUrl: 'https://skillicons.dev/icons?i=react,nodejs,postgres,sequelize',
      alt: 'React, Nodejs, Postgres, Sequelize',
      path: '/projects/2/Budget-App' ,
      githubUrl: '',
    },
    {
      id: 1,
      title: 'Hospital Database',
      description: `This project, which I developed during my school years with friends, was my first encounter with using a database, and I greatly enjoyed the experience. ` + 
                    `With the solid foundation it provided, I am looking forward to revisiting and redoing this project in the future. The functions of it inclued assigning doctors, ` + 
                    `nurses to patients and patients to rooms. The database was designed with tables for rooms, staff, and patients, incorporating relationships to track assignments, roles, working hours, and wages.`,
      techStackImgUrl: 'https://skillicons.dev/icons?i=php,mysql,bootstrap',
      alt: 'Php, MySql, Bootstrap',
      path: '',
      githubUrl: 'https://github.com/randomlname/HospitalDatabase',
    },
  ];


  return (
    <div className="container mx-auto px-4 my-10">
      <div className="space-y-4">
        {projects.map(project =>
          <div className="p-4 shadow rounded bg-white">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className='my-5'>
              {project.description}
            </p>
            <div className="flex items-center">
              <span className="mr-2">This project uses:</span>
              <TechIcon alt={project.alt} src={project.techStackImgUrl}/>
            </div>
            <div className="mt-4 flex justify-end items-center space-x-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                  <FaGithub className="inline" /> GitHub
                </a>
              )}
              {project.path && (
                <Link to={project.path} className="inline-block text-blue-500 hover:text-blue-700">
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