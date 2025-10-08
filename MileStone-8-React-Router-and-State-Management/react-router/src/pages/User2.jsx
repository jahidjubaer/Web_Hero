import React, { use } from 'react';

const User2 = ({userPromise}) => {
    const user = use(userPromise); 
    console.log(user);
    
    return (
        <div>
            <h1>This is a user2</h1>
        </div>
    );
};

export default User2;