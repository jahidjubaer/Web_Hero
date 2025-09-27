import { use } from "react";
import Users from "./user";

export default function User({ fetchUser }) {
  // using use we can get the data from fetchUser promise ;
  const user = use(fetchUser);

  return (
    <div className="card">
      <h1>User : {user.length} </h1>
      {user.map((user) => (
        <Users key={user.id} user={user}></Users>
      ))}
    </div>
  );
}
