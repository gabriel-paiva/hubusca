import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/hubusca-logo.png';

const Header: React.FC = () => (
  <div className="header">
    <Link to="/"><img src={Logo} alt="Hubusca Logo" /></Link>
  </div>
);

export default Header;
