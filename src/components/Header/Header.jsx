import { Link } from "react-router-dom";
import Logo from "../../assets/LogoWnowords.png";
import { HeaderContainer } from "./HeaderStyle";

export default function Header({ currentPage }) {
  console.log(currentPage);
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
      <Link to="/">{currentPage === "feed" ? "Logout" : "Entrar"}</Link>
    </HeaderContainer>
  );
}
