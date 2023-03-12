import Logo from './assets/shared/logo.svg';
import { Link } from 'react-router-dom';
import { useSlideShow } from './context/DetailsPageContext';
const Navbar = () => {
  const { slideShowID, startSlideshow, stopSlideshow } = useSlideShow();
  return (
    <nav className='navbar'>
     <Link to={'/'}> 
      <img src={Logo} onClick={stopSlideshow} alt="The logo for the Galleria Slideshow Website" className='navbar__logo'/>
     </Link>
      <span onClick={startSlideshow} className='navbar__slideshow--start'>{slideShowID ? "Stop Slideshow" : "Enter Slideshow"}</span>
    </nav>
  )
}

export default Navbar