import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className="logo"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ width: "35px" }}
    >
      <img src={logo} alt="ClimateScoop logo" width={"100%"} />
    </div>
  );
}

export default Logo;
