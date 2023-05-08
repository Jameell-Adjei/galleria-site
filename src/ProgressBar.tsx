import { useCurrentSlide, useDetails } from "./context/DetailsPageContext";
import { ReactComponent as BackButton } from "./assets/shared/icon-back-button.svg";
import { ReactComponent as NextButton } from "./assets/shared/icon-next-button.svg";
import { useEffect, useState } from "react";

const ProgressBar = () => {
  const { currentSlide, incrementCurrentIndex, decrementCurrentIndex } = useCurrentSlide();
  const { currentIndex } = useCurrentSlide();
  const { state } = useDetails();

  let amountSeen = (currentIndex + 1) / state.slides.length;
  const [disabled, setDisabled] = useState<boolean>(false);
  const [rightDisabled, setRightDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (currentIndex === 0) {
      setDisabled(true);
    } else if (currentIndex === state.slides.length - 1) {
      setRightDisabled(true);
    }

    // Clean up function
    return () => {
      setDisabled(false);
      setRightDisabled(false);
    };
  }, [currentIndex]);

  return (
    <section id="progress-bar">
      <div
        className="progress"
        style={{ width: `100%`, height: "1px", background: "#E5E5E5" }}
      />
      <div
        className="progress"
        style={{
          width: `${amountSeen * 100}%`,
          height: "1px",
          background: "black",
        }}
      />

      <div>
        <h2 id="progress-bar__painting">{currentSlide.name}</h2>
        <p id="progress-bar__artist">{currentSlide.artist.name}</p>
      </div>

      <div className="progress-bar__button-container">
        <button
          onClick={decrementCurrentIndex}
          className={`${disabled ? "disabled" : ""}`}
        >
          <BackButton
            className={`${disabled ? "" : "progress-bar--button"} `}
          />
        </button>
        <button
          onClick={incrementCurrentIndex}
          className={`${rightDisabled ? "disabled" : ""}`}
        >
          <NextButton
            className={`${
              rightDisabled ? "" : "progress-bar--button"
            } `}
          />
        </button>
      </div>
    </section>
  );
};

export default ProgressBar;
