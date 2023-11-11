
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto" /**sm:px-6 lg:px-8 */>
      {children} 
    </div>
  );
};

export default Container;
