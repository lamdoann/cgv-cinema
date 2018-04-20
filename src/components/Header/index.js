import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ children }) => (
  <header className="movie-header">
    {children}
  </header>
);

export default Header;
