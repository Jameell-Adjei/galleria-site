import { useCurrentSlide } from "./context/DetailsPageContext";
import { useLightBox } from "./context/LightBoxContext";


const LightBox = () => {
  const { currentSlide } = useCurrentSlide()
  const { open , changeLightBox } = useLightBox();

  return (
      <div className="lightBox" style={{ visibility : `${open ? "visible" : "hidden" }`}} onClick={changeLightBox}>
        <span onClick={changeLightBox}>C L O S E</span>
        <img src={currentSlide.images.thumbnail} alt="" srcSet="" />
      </div>   
  )
}

export default LightBox
