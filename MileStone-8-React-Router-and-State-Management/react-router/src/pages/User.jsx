import React from 'react';
import { useLoaderData,  } from 'react-router';

const User = () => {
    const user = useLoaderData(); 
    console.log(user);
    
    return (
        <div>
            <h1>user section</h1>
        </div>
    );
};

export default User;