import data from "./data.json";
import Painting from "./Painting";
const ImageContainer = () => {
  return (
    <div className="imageContainer">
      {data.map((el, index) => (
        <Painting
          picture={el.images.thumbnail}
          title={el.name}
          artist={el.artist.name}
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
