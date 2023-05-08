import { motion, Variants, AnimatePresence } from "framer-motion";
import { useCurrentSlide } from "./context/DetailsPageContext";
import { useLightBox } from "./context/LightBoxContext";


const LightBox = () => {
  const { currentSlide } = useCurrentSlide();
  const { open, changeLightBox } = useLightBox();
  const lightBoxVariants: Variants = {
    enter: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.section
          className="lightBox"
          style={{
            visibility: `${open ? "visible" : "hidden"}`,
            display: `${open ? "flex" : "none"}`,
          }}
          onClick={changeLightBox}
          variants={lightBoxVariants}
          initial="enter"
          animate="visible"
          exit="enter"
          key={currentSlide.name}
        >
          <div>
            <span className="lightBox-text">CLOSE</span>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={`${currentSlide.images.gallery}`}
              />
              <img
                src={currentSlide.images.thumbnail}
                alt={`Painting of ${currentSlide.name} by ${currentSlide.artist.name}`}
                srcSet=""
              />
            </picture>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default LightBox;
