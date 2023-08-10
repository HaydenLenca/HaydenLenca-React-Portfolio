import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <><header>
    <h1 className='pageHeader'>Hayden Lenca</h1>
    <ul  className="sideNav nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      {/* <li>Skill</li> */}
      <li>
        <a href='https://github.com/HaydenLenca'>Git Hub</a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/hayden-lenca-500177281/'>LinkedIn</a>
      </li>
      
    </ul>
    </header>
    </>
  );
}

export default NavTabs;










