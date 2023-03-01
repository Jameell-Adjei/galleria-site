import Logo from './assets/shared/logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
     <Link to={'/'}> 
      <img src={Logo} alt="The logo for the Galleria Slideshow Website" className='navbar__logo'/>
     </Link>
      <span className='navbar__slideshow--start'>Enter Slideshow</span>
    </nav>
  )
}

export default Navbar