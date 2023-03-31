import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="logo" onClick={handleClick} style={{ width: "35px" }}>
      <img src={logo} alt="ClimateScoop logo" width={"100%"} />
    </div>
  );
}

export default Logo;
