import React from 'react';
import { Link } from 'react-router';

const User = ({userdata }) => {
    const {name, email, phone, id} = userdata; 
    return (
        <div className='users'>
            <h1>{name}</h1>
            <h4>{phone}</h4>
            <p>{email}</p>
            {/* // route in dyanamic way  */}
            <button> <Link to={`/user/${id}`} >Load User data</Link> </button>
        </div>
    );
};

export default User;