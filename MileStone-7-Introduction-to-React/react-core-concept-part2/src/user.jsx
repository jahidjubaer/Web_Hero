import { use } from "react";

export default function User({ fetchUser }) {
    // using use we can get the data from fetchUser promise ; 
    const user = use(fetchUser); 
    
  return (
    <div className="user">
      <h1>User : {user.length} </h1>
    </div>
  );
}
