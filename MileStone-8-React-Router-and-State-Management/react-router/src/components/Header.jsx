import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className=''>
            <Link  to="/home">Home</Link>
            <Link  to="/blog">Blog</Link>
            <Link  to="/profile">Profile</Link>
            <Link  to="/project">Project</Link>
            <Link to="/services">Services</Link>
        </div>
    );
};

export default Header;