import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import LabedditLogo from "../../assets/labedditlogo.png";
import {
  BreakLine,
  Button1,
  Button2,
  ButtonsContainer,
  HomeContainer,
  HomeLogoContainer,
  Input,
  LoginForm,
} from "./HomePageStyles";

export default function HomePage() {
  const { form, onChange } = useForm({ email: "", password: "" });
  return (
    <HomeContainer>
      <HomeLogoContainer>
        <img src={LabedditLogo} alt="Logo com titulo LabEddit" />
        <p>O projeto de rede social da Labenu</p>
      </HomeLogoContainer>
      <LoginForm>
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
        <Button1>Continuar</Button1>
        <BreakLine />
        <Link to="/signup">
          <Button2>Crie uma conta!</Button2>
        </Link>
      </ButtonsContainer>
    </HomeContainer>
  );
}
