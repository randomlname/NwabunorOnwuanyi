import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './css/App.css';
import Home from './tsx/Home';
import Projects from './tsx/Projects';
import ProjectDetailList from './tsx/ProjectDetailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const navItemClass = (path: string) => {
    return location.pathname === path ? 'bg-gray-700 hover:text-gray-300' : 'hover:text-gray-300';
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
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId/:projectName" element={<ProjectDetailList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
