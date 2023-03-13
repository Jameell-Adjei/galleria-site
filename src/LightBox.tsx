import { useCurrentSlide } from "./context/DetailsPageContext";
import { useLightBox } from "./context/LightBoxContext";


const LightBox = () => {
  const { currentSlide } = useCurrentSlide()
  const { open , changeLightBox } = useLightBox();

  return (
      <section className="lightBox" style={{ visibility : `${open ? "visible" : "hidden" }` , display : `${open ? "flex" : "none"}`}} onClick={changeLightBox}>
        <div style={{position: "relative"}}>
          <span className="lightBox-text">CLOSE</span>
          <img src={currentSlide.images.thumbnail} alt="" srcSet="" />
        </div> 
      </section>   
  )
}

export default LightBox
