
import React from 'react';

  import ErrorBoundary from './ErrorBoundary';
const Navbar = () => {
  return (
    <>
      
 <ul className='navbar' >
          <li><a href="/">Home</a></li>
          <li><a href="/skill">Skills</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/certificate">Certificate</a></li>
          <li><a href="/project">Project</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
       
     
    </>
  );
};
  
export default Navbar;