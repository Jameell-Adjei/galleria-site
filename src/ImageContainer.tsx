import data from "./data.json";
import Painting from "./Painting";
const ImageContainer = () => {

  return (
    <div>
      {data.map((el, index) => (
        <Painting picture={el.images.thumbnail} title={el.name} author={el.artist.name} key={index}/>
      ))}
    </div>
  );
};

export default ImageContainer;
