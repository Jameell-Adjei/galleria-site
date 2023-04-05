import data from "./data.json";
import Painting from "./Painting";
import Macy from 'macy';
import { useEffect } from "react";

const macyOptions = {
    container: '.imageContainer',
    trueOrder: false,
    waitForImages: false,
    mobileFirst: true,
    margin: 24,
    columns: 1,
    breakAt: {
      1100: 4,
      820: 3,
      668: {
        margin: 40,
        columns: 2,
      },
    }
}

const ImageContainer = () => {
  useEffect(()=>{
    new Macy(macyOptions);
  },[])
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
