import { useContext } from "react";
import { NavbarContext, useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext;
  //  console.log(value);

  return "helloWorld";
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello there , {user?.name?.toUpperCase()}</p>

          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
};

export default UserContainer;
