import { useEffect } from "react";
import { useCurrentSlide } from "./context/DetailsPageContext"
import ProgressBar from "./ProgressBar";
import LightBox from "./LightBox" ;
import { useLightBox } from "./context/LightBoxContext";

const DetailsPage = () => {
    const { currentSlide, currentIndex , setSlide } = useCurrentSlide();
    const {  changeLightBox } = useLightBox();
    useEffect(()=>{
      setSlide()
    },[])
  
    useEffect(()=>{
      setSlide()
    },[currentIndex])
  return (
    <>
      <main className="detailsPage">
          <picture className="detailsPage__image-container">
            <img id='detailsPage__image' src={currentSlide.images.hero.small} alt="" srcSet="" />
            <button style={{ position: "absolute", top: "12px", left: "12px" }} onClick={changeLightBox}> View Image</button>     
          </picture>
          <div className="detailsPage__painting-info">
            <h2 className="detailsPage__painting-name">{currentSlide.name}</h2> 
            <p id="detailsPage__artist-name">{currentSlide.artist.name}</p>          
          </div>
          <img id="detailsPage__artist-image" src={currentSlide.artist.image} alt="" />
        <section className="detailsPage__painting-overview">
          <h2 id="detailsPage_painting-year">{currentSlide.year}</h2>
          <p id="detailsPage_painting-desc">{currentSlide.description}</p>
        </section>
      </main>  
      <LightBox/> 
      <ProgressBar/>     
    </>

  )
}

export default DetailsPage