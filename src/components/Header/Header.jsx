import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Logo from "../../assets/LogoWnowords.png";
import { HeaderContainer } from "./HeaderStyle";

export default function Header({ currentPage }) {
  const navigate = useNavigate();
  const goToFeed = (e) => {
    e.preventDefault();
    navigate("/feed");
  };
  const logout = () => {
    localStorage.removeItem("token");
  };
  return (
    <HeaderContainer>
      {currentPage === "postDetail" ? (
        <IoMdClose onClick={goToFeed} size={50} color="gray" />
      ) : null}
      <img src={Logo} alt="Logo" />
      <Link
        onClick={
          currentPage === "feed" || currentPage === "postDetail" ? logout : null
        }
        to="/"
      >
        {currentPage === "feed" || currentPage === "postDetail"
          ? "Logout"
          : "Entrar"}
      </Link>
    </HeaderContainer>
  );
}
