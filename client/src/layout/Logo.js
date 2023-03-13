import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="logo" onClick={handleClick}>
      logo
    </div>
  );
}

export default Logo;
