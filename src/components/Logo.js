import React from 'react';
import { Link } from 'react-router-dom';

const ComponentsLogo = () => (
  <div style={{ textAlign: 'center', marginTop: 8 }}>
    <Link to={'/Home'} style={{ color: 'white', display: 'inline-block', letterSpacing: 8, textIndent: 8, textDecoration: 'none' }}>LOGO</Link>
  </div>
)

export default ComponentsLogo;