import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return <h3>Welcome, {user.name}</h3>;
}

export default Header;
