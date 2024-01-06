import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { Button1, Input } from "../HomePage/HomePageStyles";
import {
  CheckboxContainer,
  SignupForm,
  TermsConditionsContainer,
  Title,
} from "./SignUpPageStyle";

export default function SignUpPage() {
  const { form, onChange } = useForm({
    apelido: "",
    email: "",
    password: "",
    isChecked: false,
  });
  return (
    <>
      <Header currentPage="signup" />
      <Title>Ola, boas vindas ao LabEddit!</Title>
      <SignupForm>
        <Input
          type="text"
          placeholder="Apelido"
          value={form.apelido}
          name="apelido"
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
        <Button1>Cadastrar</Button1>
      </TermsConditionsContainer>
    </>
  );
}
