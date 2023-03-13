import Logo from "./Logo";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import GoogleButton from "./GoogleButton";
import { Context } from "../context/ContextProvider";

function Header() {
  const { user } = useContext(Context);
  return (
    <div className="header-container">
      <header className="header-box">
        <div>
          <Logo />
        </div>
        <nav>
          <ul>
            <NavLink className="nav-link" to="/articles">
              articles
            </NavLink>
            {user && (
              <NavLink className="nav-link" to="/myPage">
                myPage
              </NavLink>
            )}
          </ul>
        </nav>
        <div className="google-button">
          <GoogleButton />
        </div>
      </header>
    </div>
  );
}

export default Header;
