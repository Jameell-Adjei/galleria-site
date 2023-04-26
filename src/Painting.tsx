import { Image } from "./interfaces";
import { Link } from "react-router-dom";
import { useCurrentSlide } from "./context/DetailsPageContext"

const Painting: React.FC<Image> = ({ artist, name, id , images }) => {
  const { updateIndex } = useCurrentSlide();
  return (
      <figure className="painting">
        <Link  to={'/slideshow'} onClick={()=> updateIndex(id ? id : 0)}>
          <img  className="painting__image" src={images.thumbnail} alt={`Painting of ${name}`} srcSet="" />
            <figcaption className="painting__info">
              <h2 className="painting__title">{name}</h2> 
              <p className="painting__artist">{artist.name}</p>
            </figcaption>
        </Link>
      </figure>
  );
};

export default Painting;
