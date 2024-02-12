import React, { useState, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface CollapsibleSectionProps {
    title: string;
    children: ReactNode;
    open: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children, open }) => {
    const [isOpen, setIsOpen] = useState(open);
  
    return (
      <div>
        <h1 className='text-3xl font-bold border-b-8 my-6 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {title} <FontAwesomeIcon icon={isOpen ? faArrowUp : faArrowDown} className="icon-small"/>
        </h1>
        {isOpen && <div className='mb-5 px-4'>{children}</div>}
      </div>
    );
};

const Resume: React.FC = () => {
  
  return (
    <div className="container mx-auto px-4">
        <div className='text-center my-4'>
            <h3 className='text-xl font-bold'>Open to New Opportunities</h3>
            <p>
                I'm currently exploring a variety of roles where I can contribute my skills in Full Stack Development, web development, and beyond, 
                aiming to grow alongside a forward-thinking team. Eager to discuss how I can bring value to your projects. Let's connect!
                <a href="https://www.linkedin.com/in/nwabunor-onwuanyi/" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem', paddingTop: '0.2rem'}}>
                    <img src="https://skillicons.dev/icons?i=linkedin" width="20" height="20" alt="linkedin" />
                </a>
            </p>
        </div>

        <CollapsibleSection title="Skills" open={false}>
            <p className='mb-3 ml-2'>
            </p>
            <ul className='bullet-list ml-10'>
                <li className='mb-3'>
                    <span className='font-bold underline'>Languages & Frameworks</span>
                    <ul className='ml-10 bullet-list-2'>
                        <li><span className='font-bold'>Web Development</span>: Proficient in JavaScript, TypeScript, CSS, HTML, experienced with React, Next.js, Vue.js, Angular.js frameworks for front-end development.</li>
                        <li><span className='font-bold'>Backend Development</span>: Skilled in Node.js with Express.js, Python, and PHP, familiar with Java and C++/C for system-level programming.</li>
                        <li><span className='font-bold'>Full Stack</span>: Capable of creating robust backend services with Express.js and integrating them with front-end technologies; proficient with Laravel for PHP and Node.js for JavaScript-based solutions.</li>
                    </ul>
                </li>

                <li className='mb-3'>
                    <span className='font-bold underline'>Libraries</span>
                    <ul className='ml-10 bullet-list-2'>
                        <li><span className='font-bold'>Frontend Libraries/Frameworks</span>: Experience with React for building dynamic user interfaces, proficient with Next.js for server-side rendering, and skilled in Vue.js and Angular.js for scalable single-page applications.</li>
                        <li><span className='font-bold'>Backend Framework</span>: Proficient in Laravel for robust PHP backend development, with a strong understanding of MVC architecture and middleware.</li>
                        <li><span className='font-bold'>UI Interaction</span>: Experienced in enhancing user interfaces and interactivity with jQuery.</li>
                    </ul>
                </li>

                <li className='mb-3'>
                    <span className='font-bold underline'>Database Management</span>
                    <ul className='ml-10 bullet-list-2'>
                        <li><span className='font-bold'>Relational Databases</span>: Proficient in designing and managing structured data with MySQL and PostgreSQL, adept at writing complex queries and optimizing database performance.</li>
                        <li><span className='font-bold'>NoSQL Databases</span>: Experienced in implementing scalable solutions with MongoDB, utilizing its flexible schema for efficient data storage and retrieval.</li>
                        <li><span className='font-bold'>Caching & Data Storage</span>: Experienced in employing Redis for high-performance caching and session storage to enhance application responsiveness and reduce database load.</li>
                    </ul>
                </li>
                
                <li className='mb-3'>
                    <span className='font-bold underline'>Tools & Technologies</span>
                    <ul className='ml-10 bullet-list-2'>
                        <li><span className='font-bold'>Containerization</span>: Experienced in using Docker to create, deploy, and run applications by using containers, ensuring consistency across multiple development and release cycles.</li>
                        <li><span className='font-bold'>Version Control</span>: Skilled in Git for source code management, including techniques in branching, merging, and maintaining multiple workflows.</li>
                        <li><span className='font-bold'>Continuous Integration & Deployment</span>: Adept in implementing CI/CD pipelines with Jenkins and GitHub Actions to automate testing and deployment processes, significantly improving development speed and code quality.</li>
                        <li><span className='font-bold'>Cloud Computing</span>: Experienced with AWS, leveraging a range of services including IAM, EC2, S3, RDS, and Lambda for scalable, reliable, and secure cloud-based solutions.</li>
                    </ul>
                </li>
            </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Professional Experience" open={true}>
            <div className='mb-5'>
                <h2 className='border-b-2 my-3'> <span className='font-bold text-lg'>Senior Developer |</span> Petrepreneur, Toronto Ontario <span className='font-bold text-lg'>|</span> November 2023 - Present. </h2>
                <p className='mb-3 ml-2'>
                    In my current role at Petrepreneur, I am tasked with spearheading the development and implementation of new features for our Flutter-based mobile application, compatible with both iOS and Android platforms.
                </p>
                <ul className='bullet-list ml-10'>
                    <li>Lead the end-to-end development lifecycle for new feature rollouts on the Flutter app.</li>
                    <li>Conduct thorough quality assurance testing to ensure a bug-free application across both iOS and Android systems.</li>
                    <li>Optimize app performance for a smooth, responsive user experience on a variety of devices.</li>
                    <li>Utilize Firebase for secure and scalable backend services, including authentication, database management, and analytics.</li>
                    <li>Implement modern development practices and methodologies to maintain high code standards and app reliability.</li>
                </ul>
                {/* <p className='mb-3 ml-10'>
                    <ul className='ml-8 bullet-list-2'>
                        <li>
                            <span className='font-bold'>Technologies used</span>: React, Flutter, Firebase.
                        </li>
                    </ul>
                </p> */}
            </div>

            <div className='mb-5'>
                <h2 className='border-b-2 my-3'> <span className='font-bold text-lg'>Full Stack Developer |</span> TracxTMS, Lethbridge Alberta <span className='font-bold text-lg'>|</span> December 2022 - October 2023. </h2>
                <p className='mb-3 ml-2'>
                    In my position at TracxTMS, I contributed to both the Support and New Feature Development teams. My responsibilities encompassed diagnosing, resolving issues, and implementing innovative features.
                </p>
                <ul className='bullet-list ml-10'>
                    <li>Diagnosed and resolved bugs reported by users, enhancing the stability and performance of the platform.</li>
                    <li>Improved web application performance by 25% significantly enhancing the user experience for a diverse client base including over 2,000 users and drivers.</li>
                    <li>Led the development and implementation of 8 major features, directly contributing to streamlined operations and enhanced user interfaces while incorporating extensive user feedback for iterative improvements.</li>
                    <li>Integrated services from GPS providers such as Motive and Geotab, facilitating advanced tracking capabilities.</li>
                    <li>Enabled data exchanges between our platform and external systems like QuickBooks, streamlining financial management for users.</li>
                    <li>Ensured seamless integration of new features and third-party services, enhancing the website's functionality and user satisfaction.</li>
                </ul>
                {/* <p className='mb-3 ml-10'>
                    <ul className='ml-8 bullet-list-2'>
                        <li>
                            <span className='font-bold'>Technologies used</span>: PHP, Laravel, MySql, jQuery, CSS, HTML, KoolReport. 
                        </li>
                    </ul>
                </p> */}
            </div>
        </CollapsibleSection>

        {/* <CollapsibleSection title="Certifications" open={false}>
            <div>
                <div className='mb-5 px-4'>
                    <h2 className='border-b-2 my-3'></h2>
                    <ul className='bullet-list-2 ml-10'>
                        <li></li>
                    </ul>
                    <p className='mb-3 ml-12'>
                    </p>
                </div>
            </div>
        </CollapsibleSection> */}

        <CollapsibleSection title="Education" open={false}>
            <div className='mb-12'>
                <h2 className='border-b-2 my-3'>University of Lethbridge, 2018 – 2022.</h2>
                <ul className='bullet-list-2 ml-10'>
                    <li>Bachelor of Science in Computer Science.</li>
                </ul>
                <p className='mb-3 ml-12'>
                    <span className=' font-bold'>Key Subjects:</span> Data Structures and Algorithms, Software Engineering II, Database Management Systems.
                </p>
            </div>
        </CollapsibleSection>

    </div>
  );
};

export default Resume;