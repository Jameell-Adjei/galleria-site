import { useCurrentSlide } from "./context/DetailsPageContext";
import { ReactComponent as BackButton } from  "./assets/shared/icon-back-button.svg";
import { ReactComponent as NextButton } from  "./assets/shared/icon-next-button.svg";

const ProgressBar = () => {
  const { currentSlide , updateIndex } = useCurrentSlide();
  let { currentIndex } = useCurrentSlide();

  return (
    <section id="progress-bar">
      <div>
        <h2 id="progress-bar__painting">{currentSlide.name}</h2>
        <p id="progress-bar__artist">{currentSlide.artist.name}</p>
      </div>
      <div className="progress-bar__button-container">
        <BackButton onClick={() =>{
            updateIndex(currentIndex -= 1)            
        }}/>
        <NextButton onClick={()=>{
            updateIndex(currentIndex += 1)
        }}/>
      </div>
    </section>
  );
};

export default ProgressBar;
