import Logo from './assets/shared/logo.svg';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={Logo} alt="The logo for the Galleria Slideshow Website" className='navbar__logo'/>
      <span className='navbar__slideshow--start'>Enter Slideshow</span>
    </nav>
  )
}

export default Navbar