import React from 'react';
import { NavLink } from 'react-router';

const Navigationbar = () => {
    return (
        <div>
            <ul className='flex justify-center gap-5'>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/user">User</NavLink>
            </ul>
        </div>
    );
};

export default Navigationbar;