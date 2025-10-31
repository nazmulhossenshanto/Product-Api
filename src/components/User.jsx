import React from 'react';
import { NavLink } from 'react-router';

const User = ({user}) => {
    const {name, id, email, phone} = user;
    return (
        <div className='rounded-2xl my-3 p-3 border-2 border-fuchsia-700'>
            <h2>{name}</h2>
            <p>{email}</p>
            <p><small>{phone}</small></p>
            <NavLink className={`font-bold text-2xl text-green-500`} to={`/users/${id}`}>Show Details</NavLink>
        </div>
    );
};

export default User;