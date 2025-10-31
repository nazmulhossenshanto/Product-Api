import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user)
    const navigate = useNavigate();
    return (
        <div>
            <NavLink to="/user" className={`btn btn-accent`}>Back to User</NavLink>
            <button className='btn btn-dash' onClick={()=> navigate(-1)}>Back</button>
            <h1>details</h1>
            <h1>user name is <span className='text-red-600'>{user.name}</span></h1>
        </div>
    );
};

export default UserDetails;