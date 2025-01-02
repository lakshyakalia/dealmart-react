import { useNavigate } from "react-router";
import "./logo.css";

export default function Logo() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex-logo " onClick={navigateToHome}>
      {/* <div>
        <img src="./assets/images/online-shopping.png" alt="" />
      </div>
      <div className="font-logo">Dealmart</div> */}
      <img src="/assets/logos/logo-transparent-png.png" alt="" />
    </div>
  );
}
