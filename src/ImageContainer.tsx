import data from "./data.json";
import Painting from "./Painting";
import Macy from 'macy';
import { useLayoutEffect } from "react";
import { animate, stagger } from "framer-motion"

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
  useLayoutEffect(()=>{
    new Macy(macyOptions);
    animate(".painting",{ opacity: [0,1] }, { delay: stagger(0.25) })
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
