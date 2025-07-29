import React from 'react';
import './Layout.css';
import bgImage from '../../assets/bg.jpg';  

function Layout({ children }) {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%), url(${bgImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
  };

  return (
    <div className="layout-container" style={backgroundStyle}>
      {children}
    </div>
  );
}

export default Layout;
