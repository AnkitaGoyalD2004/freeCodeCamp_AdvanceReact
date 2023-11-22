import { useState , createContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// custom hook
export const useAppContext = () => 

const Navbar = () => {
  React.createContext();
  const [user, setUser] = useState({ name: "Abhita" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{user,logout}}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout} />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
