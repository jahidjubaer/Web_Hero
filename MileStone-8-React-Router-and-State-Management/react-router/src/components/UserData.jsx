import React from 'react';
import { useLoaderData } from 'react-router';

const UserData = ({params}) => {
    const userData = useLoaderData(params); 
    // console.log(userData);
    
    return (
        <div>
            <h2> {userData.username} </h2>
            <p>{userData.website}</p>
        </div>
    );
};

export default UserData;