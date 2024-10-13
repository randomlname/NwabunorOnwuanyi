import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './css/App.css';
import Home from './tsx/Home';
import Projects from './tsx/Projects';
import ProjectDetailList from './tsx/ProjectDetailList';
import Resume from './tsx/Resume';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import StratumLabs from './tsx/stratumLabs';


const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    return savedMode;
  });

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode); 
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const navItemClass = (path: string) => {
    return location.pathname === path ? 'bg-gray-700 hover:text-gray-300 rounded-3xl' : 'hover:text-gray-300';
  };

  return (
    <div className="bg-gray-800 text-white p-6">
      <nav className="flex justify-between">
        <ul className="flex space-x-4">
          <li className={navItemClass('/')}>
            <Link to="/" className="block px-3 py-2 rounded">Home</Link>
          </li>
          <li className={navItemClass('/projects')}>
            <Link to="/projects" className="block px-3 py-2 rounded">Projects</Link>
          </li>
          <li className={navItemClass('/resume')}>
            <Link to="/resume" className="block px-3 py-2 rounded">Resume</Link>
          </li>
          {/* <li className={navItemClass('/stratumLabs')}>
            <Link to="/stratumLabs" className="block px-3 py-2 rounded">Stratum Labs</Link>
          </li> */}
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            { darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
          </button>
        </ul>
      </nav>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <main className="main-content">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId/:projectName" element={<ProjectDetailList />} />
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/stratumLabs" element={<StratumLabs />} /> */}
          </Routes>
        </main>
        <footer className="footer">
          <p>Copyright © 2023 - {new Date().getFullYear()} Nwabunor Jeff Onwuanyi - All Rights Reserved.</p>
        </footer>
      </Router>
    </>
    
  );
};

export default App;
