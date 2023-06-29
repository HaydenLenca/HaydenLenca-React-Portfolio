import React from 'react';

const styles = {
  footerStyle: {
    background: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
};


const Footer = () => {
  return (
    <footer style={styles.footerStyle}>
      <div>
        <h4>
        <a href='https://github.com/HaydenLenca'> "Git Hub" </a>
        <a href='https://www.linkedin.com/in/hayden-lenca-500177281/'> "linkedin" </a>
        Slack: Hayden Lenca
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
