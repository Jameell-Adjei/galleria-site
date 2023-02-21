import { useCurrentSlide } from "./context/DetailsPageContext";

const ProgressBar = () => {
  const { currentSlide } = useCurrentSlide();
  return (
    <section id="progress-bar">
      <h2 id="progress-bar__painting">{currentSlide.name}</h2>
      <p id="progress-bar__artist">{currentSlide.artist.name}</p>
    </section>
  );
};

export default ProgressBar;
