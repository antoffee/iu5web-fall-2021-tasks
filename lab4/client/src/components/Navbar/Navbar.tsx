import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => (
    <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/cafe'}>Cafe List</Link>
        <Link to="/create-coffee">Create coffee</Link>
        <Link to="/create-cafe">Create cafe</Link>
    </div>
);
