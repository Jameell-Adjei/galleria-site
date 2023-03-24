import { useCurrentSlide, useDetails } from "./context/DetailsPageContext";
import { ReactComponent as BackButton } from  "./assets/shared/icon-back-button.svg";
import { ReactComponent as NextButton } from  "./assets/shared/icon-next-button.svg";
import { useState , useEffect } from "react";

const ProgressBar = () => {
  const { currentSlide , updateIndex } = useCurrentSlide();
  let { currentIndex } = useCurrentSlide();
  const { state } = useDetails();

  let amountSeen = (currentIndex + 1)/state.slides.length;
  const [disabled , setDisabled] = useState<boolean>(false)
  const [rightDisabled , setRightDisabled] = useState<boolean>(false)

  useEffect(() => {
    if(state.currentIndex === 0){
      setDisabled(true)   
    } else if(state.currentIndex === state.slides.length - 1){
      setRightDisabled(true)
    }

    // Clean up function
    return () => {
      setDisabled(false)
      setRightDisabled(false)
    }
  }, [state.currentIndex])
  
  
  return (
    <section id="progress-bar">
      <div className="progress"style={{ width: `100%`, height: "1px", background:"#E5E5E5"}}/>
      <div className="progress"style={{ width: `${amountSeen * 100}%`, height: "1px", background:"black"}}/>

      <div>
        <h2 id="progress-bar__painting">{currentSlide.name}</h2>
        <p id="progress-bar__artist">{currentSlide.artist.name}</p>
      </div>
      
      <div className="progress-bar__button-container">
        <BackButton className={`${disabled ? "disabled" : "progress-bar--button"}`} onClick={() =>{
            updateIndex(currentIndex -= 1)            
        }}/>
        <NextButton className={`${rightDisabled ? "disabled" : "progress-bar--button"}`} onClick={()=>{
            updateIndex(currentIndex += 1)
        }}/>
      </div>
    </section>
  );
};

export default ProgressBar;
