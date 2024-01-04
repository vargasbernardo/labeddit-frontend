import LabedditLogo from '../../assets/labedditlogo.png'
import { BreakLine, Button1, Button2, ButtonsContainer, HomeContainer, HomeLogoContainer, Input, LoginForm } from './HomePageStyles';


export default function HomePage() {
  return (
    <HomeContainer>
      <HomeLogoContainer>
        <img src={LabedditLogo} alt='Logo com titulo LabEddit'/>
        <p>O projeto de rede social da Labenu</p>
      </HomeLogoContainer>
      <LoginForm>
        <Input type="email" placeholder='Email'/>
        <Input type="password" placeholder='Senha'/>
      </LoginForm>
      <ButtonsContainer>
        <Button1>Continuar</Button1>
        <BreakLine/>
        <Button2>Crie uma conta!</Button2>

      </ButtonsContainer>
    </HomeContainer>
  );
}
