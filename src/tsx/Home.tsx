import React from 'react';

const Home: React.FC = () => {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-6">Nwabunor Jeff Onwuanyi</h1>
        <h2 className="text-2xl text-center my-7">Full Stack Developer | AWS Solutions Architect | Database Management | Cloud Solutions | DevOps</h2>

        <div className="flex justify-center space-x-4 my-4">
            <a href="https://github.com/randomlname" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=github" width="60" height="70" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/nwabunor-onwuanyi/" target="_blank" rel="noreferrer">
                <img src="https://skillicons.dev/icons?i=linkedin" width="60" height="70" alt="linkedin" />
            </a>
        </div>

        <h4 className='text-center border-b-2'>
            I have a passion for building web and mobile applications. with skills in PHP, SQL, React and REST API, with a growing expertise in  AWS services. I am enthusiastic about web development, 
            machine learning and statistical analysis, and experienced in diverse programming languages such as Haskell, Verlog, Flutter and Rust.
        </h4>

        <div className="mx-5 px-4 lg:mx-20 lg:px-20 py-7">
            <p className="lg:text-justify mb-10">
                To enhance my programming skills, I decided to work on a series of projects, starting with the development of a budgeting app. This application is built using Node.js, React, and PostgreSQL, 
                and is designed to help users manage and track their finances.
            </p>
            <p className="lg:text-justify mb-10">
                In 2023, I honed my skills in PHP, MySQL, jQuery, Laravel and JavaScript, and explored new technologies like AWS, Firebase, Flutter, 
                and Unity to broaden my development capabilities. Additionally, I ventured into machine learning, tackling projects using PyTorch for the first time.
            </p>
            <p className="lg:text-justify mb-10">
                A 2022 graduate from the University of Lethbridge, my passion lies in creating web and mobile applications. As a full-stack developer,
                I've contributed to a fleet management application that optimizes load management for truckers, streamlines dispatcher's task assignments, 
                handles invoicing, and integrates with multiple GPS providers.
            </p>
        </div>
      </div>
    );
};

export default Home;
  