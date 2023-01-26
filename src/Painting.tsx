import { Image } from "./interfaces";
const Painting: React.FC<Image> = ({ picture, artist, title }) => {
  return (
    <picture className="painting">
      <img  className="painting__image" src={picture} alt={`Painting of ${title}`} srcSet="" />
      <div className="painting__info">
        <h2 className="painting__title">{title}</h2>
        <h5 className="painting__artist">{artist}</h5>
      </div>
    </picture>
  );
};

export default Painting;
