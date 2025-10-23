// context provider ;
import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    email: "hello@gmail.com",
  };
  return (
    <div>
      {/* now i can access authInfo form any where using "use" hook  */}
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
