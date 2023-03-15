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
            <button className="detailsPage_lightBox-Button" onClick={changeLightBox}> 
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.71407 0L9.21407 1.5L6.85693 3.85714L8.14264 5.14285L10.4998 2.78571L11.9998 4.28571V0H7.71407Z" fill="white"/>
                <path d="M3.85714 6.85718L1.5 9.21432L0 7.71431V12H4.28571L2.78571 10.5L5.14285 8.14288L3.85714 6.85718Z" fill="white"/>
                <path d="M8.14264 6.85718L6.85693 8.14288L9.21407 10.5L7.71407 12H11.9998V7.71431L10.4998 9.21432L8.14264 6.85718Z" fill="white"/>
                <path d="M4.28571 0H0V4.28571L1.5 2.78571L3.85714 5.14285L5.14285 3.85714L2.78571 1.5L4.28571 0Z" fill="white"/></svg>      
                VIEW IMAGE 
            </button>     
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