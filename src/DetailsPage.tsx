import { useEffect } from "react";
import { useCurrentSlide } from "./context/DetailsPageContext"

const DetailsPage = () => {
    const { currentSlide, currentIndex , setSlide, updateIndex } = useCurrentSlide();
    useEffect(()=>{
      setSlide()
    },[])
  
    useEffect(()=>{
      setSlide()
    },[currentIndex])
  return (
    <>
      <main>
        <picture>
          <img src={currentSlide.images.hero.small} alt="" srcSet="" />
        </picture>
      
      </main>    
    </>
  )
}

export default DetailsPage