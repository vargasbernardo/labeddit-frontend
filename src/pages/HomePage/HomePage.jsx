import useForm from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import LabedditLogo from "../../assets/labedditlogo.png";
import {
  BreakLine,
  Button2,
  ButtonsContainer,
  HomeContainer,
  HomeLogoContainer,
  Input,
  LoginForm,
} from "./HomePageStyles";
import Button1 from "../../components/Button1/Button1";
import axios from "axios";
import { useState } from "react";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

export default function HomePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { form, onChange } = useForm({ email: "", password: "" });
  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://backend-labeddit-sfwt.onrender.com/users/login", {
        email: `${form.email}`,
        password: `${form.password}`,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setLoading(false);
        navigate("/feed");
      })
      .catch((err) => console.log(err));
  };

  return loading ? (
    <LoadingPage />
  ) : (
    <HomeContainer>
      <HomeLogoContainer>
        <img src={LabedditLogo} alt="Logo com titulo LabEddit" />
        <p>O projeto de rede social da Labenu</p>
      </HomeLogoContainer>
      <LoginForm onSubmit={login}>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
        />
      </LoginForm>
      <ButtonsContainer>
        <Button1 type="submit" onClick={login}>
          Continuar
        </Button1>
        <BreakLine />
        <Link to="/signup">
          <Button2>Crie uma conta!</Button2>
        </Link>
      </ButtonsContainer>
    </HomeContainer>
  );
}
