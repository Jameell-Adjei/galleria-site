import Logo from './assets/shared/logo.svg';
import { Link , useNavigate } from 'react-router-dom';
import { useSlideShow } from './context/DetailsPageContext';
const Navbar = () => {
  const { slideShowID, startSlideshow, stopSlideshow, resetCurrentIndex } = useSlideShow();
  const navigate = useNavigate();
  const handleClick =() =>{
    if(slideShowID === 0){
      navigate("/slideshow");
      startSlideshow();
    } else {
      stopSlideshow();
    }
  }
  return (
    <nav className='navbar'>
     <Link to={'/'}> 
      <img src={Logo} onClick={()=>{resetCurrentIndex(); stopSlideshow()}} alt="The logo for the Galleria Slideshow Website" className='navbar__logo'/>
     </Link>
      <span onClick={handleClick} className='navbar__slideshow--start'>{slideShowID ? "Stop Slideshow" : "Enter Slideshow"}</span>
    </nav>
  )
}

export default Navbar