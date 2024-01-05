import { Link } from 'react-router-dom'
import Logo from '../../assets/LogoWnowords.png'
import { HeaderContainer } from './HeaderStyle'

export default function Header() {
    return (
       <HeaderContainer>
            <img src={Logo} alt="Logo" />
            <Link to='/'>Entrar</Link>
       </HeaderContainer> 
    )
}