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

const StratumLabs: React.FC = () => {
  
  return (
    <div className="container mx-auto px-4">
        
    </div>
  );
};

export default StratumLabs;