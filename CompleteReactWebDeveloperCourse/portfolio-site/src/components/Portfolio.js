import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
    <h1>Portfolio Page</h1>
    <p>This is my Portfolio page.</p>
    <Link to="/portfolio/1">Item One</Link>
    <Link to="/portfolio/2">Item Two</Link>
    </div>
);

export default Portfolio;