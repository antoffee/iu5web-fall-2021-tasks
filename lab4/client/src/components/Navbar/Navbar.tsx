import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to="/create-coffee">Create coffee</Link>
    </div>
);
