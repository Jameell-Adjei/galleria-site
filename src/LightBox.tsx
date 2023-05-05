import { useCurrentSlide } from "./context/DetailsPageContext";
import { useLightBox } from "./context/LightBoxContext";


const LightBox = () => {
  const { currentSlide } = useCurrentSlide()
  const { open , changeLightBox } = useLightBox();

  return (
      <section className="lightBox" style={{ visibility : `${open ? "visible" : "hidden" }` , display : `${open ? "flex" : "none"}`}} onClick={changeLightBox}>
        <div>
          <span className="lightBox-text">CLOSE</span>
          <picture>
            <source media="(min-width: 768px)" srcSet={`${currentSlide.images.gallery}`}/> 
            <img src={currentSlide.images.thumbnail} alt={`Painting of ${currentSlide.name} by ${currentSlide.artist.name}`} srcSet="" /> 
          </picture>

        </div> 
      </section>   
  )
}

export default LightBox
