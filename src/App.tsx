import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './tsx/Home'; 
import Projects from './tsx/Projects';
import ProjectDetailList from './tsx/ProjectDetailList';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-800 text-white p-6">
        <nav className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId/:projectName" element={<ProjectDetailList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

