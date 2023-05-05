import { useEffect } from "react";
import { useCurrentSlide, useDetails } from "./context/DetailsPageContext"
import { useLightBox } from "./context/LightBoxContext";
import { ReactComponent as ViewIcon } from './assets/shared/icon-view-image.svg';
import ProgressBar from "./ProgressBar";
import LightBox from "./LightBox" ;
import { animate } from "framer-motion"


const DetailsPage = () => {
    const { currentSlide, currentIndex , setSlide } = useCurrentSlide();
    const {  changeLightBox } = useLightBox();
    const { state } = useDetails();
  
    useEffect(()=>{
      setSlide();
      animate(".detailsPage",{ opacity: [0, 1], x: [state.direction ? -200: 200, 0]}, { duration: 0.5 } )
    },[currentIndex])
  return (
      <div className="grid-container">
          <main className="detailsPage">
              <picture className="detailsPage__image-container" >
                <source media="(min-width: 768px)" srcSet={`${currentSlide.images.hero.large}`}/>
                <img id='detailsPage__image' src={currentSlide.images.hero.small} alt={`Painting of ${currentSlide.name} by ${currentSlide.artist.name}`} />
                <button className="detailsPage_lightBox-Button" onClick={changeLightBox}> 
                    <ViewIcon/>
                    VIEW IMAGE 
                </button>     
              </picture>
              
              <div className="detailsPage__painting-info">
                <h2 className="detailsPage__painting-name">{currentSlide.name}</h2> 
                <p id="detailsPage__artist-name">{currentSlide.artist.name}</p>          
              </div>
              <img id="detailsPage__artist-image" src={currentSlide.artist.image} alt={`Portrait of ${currentSlide.artist.name}`} />
              <section className="detailsPage__painting-overview">
                <h2 id="detailsPage_painting-year">{currentSlide.year}</h2>
                <p id="detailsPage_painting-desc">{currentSlide.description}</p>
                <a className="detailsPage_painting-overview--link" target={"_blank"} href={currentSlide.source}>GO TO SOURCE</a>
              </section>   
            </main> 
        <LightBox/> 
        <ProgressBar/>     
      </div>
  )
}

export default DetailsPage