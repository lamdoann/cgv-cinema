import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Footer = ({ children }) => (
  <footer className="movie-footer">
    {children}
  </footer>
);

export default Footer;
