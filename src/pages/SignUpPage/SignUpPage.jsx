import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { Input } from "../HomePage/HomePageStyles";
import {
  CheckboxContainer,
  SignupForm,
  TermsConditionsContainer,
  Title,
} from "./SignUpPageStyle";
import Button1 from "../../components/Button1/Button1";
import axios from "axios";
import { useNavigate } from "react-router";
import BASE_URL from "../../constants/BASE_URL";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    isChecked: false,
  });
  const signup = async (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/users/signup`, {
        name: `${form.name}`,
        email: `${form.email}`,
        password: `${form.password}`,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        navigate("/feed");
        resetForm();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header currentPage="signup" />
      <Title>Ola, boas vindas ao LabEddit!</Title>
      <SignupForm>
        <Input
          type="text"
          placeholder="Apelido"
          value={form.apelido}
          name="name"
          onChange={onChange}
        />
        <Input
          type="email"
          placeholder="Email"
          value={form.email}
          name="email"
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={form.password}
          name="password"
          onChange={onChange}
        />
      </SignupForm>
      <TermsConditionsContainer>
        <p>
          Ao continuar, voce concordo com o nosso{" "}
          <a href="#">contrato de usuario</a> e nossa{" "}
          <a href="#">politica de privacidade</a>
        </p>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="isChecked"
            name="isChecked"
            checked={form.isChecked}
            onChange={onChange}
          />
          <label htmlFor="legalStuff">
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </label>
        </CheckboxContainer>
        <Button1 onClick={signup}>Cadastrar</Button1>
      </TermsConditionsContainer>
    </>
  );
}
