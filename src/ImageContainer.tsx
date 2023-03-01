import data from "./data.json";
import Painting from "./Painting";

const ImageContainer = () => {

  return (
    <div className="imageContainer">
      {data.map((el, index) => (
        <Painting
          {...el}
          id={index}
          key={index}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
