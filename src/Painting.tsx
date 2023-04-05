import { Image } from "./interfaces";
import { Link } from "react-router-dom";
import { useCurrentSlide } from "./context/DetailsPageContext"

const Painting: React.FC<Image> = ({ artist, name, id , images }) => {
  const { updateIndex } = useCurrentSlide();
  return (
      <picture className="painting">
        <Link  to={'/slideshow'} onClick={()=> updateIndex(id ? id : 0)}>
          <img  className="painting__image" src={images.thumbnail} alt={`Painting of ${name}`} srcSet="" />
          <div className="painting__info">
            <h2 className="painting__title">{name}</h2>
            <h5 className="painting__artist">{artist.name}</h5>
          </div>
        </Link>
      </picture>
  );
};

export default Painting;
