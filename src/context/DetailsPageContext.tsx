import data from "../../src/data.json";
import { Image } from "../interfaces";

interface DetailsPageState {
  currentIndex: number;
  slides: any[];
  currentSlide: Image;
}

interface DetailsPageAction  {
  type: string;
  payload?: number;
};

const INITIAL_STATE: DetailsPageState = {
  currentIndex: 5,
  slides: data,
  currentSlide: {
    id: -1,
    picture: "",
    title: "",
    artist: "",
  },
};

const reducer = (state: DetailsPageState, action: DetailsPageAction):DetailsPageState=> {
  switch (action.type) {
    case "SET_CURRENT_INDEX": {
      console.log(action);
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        currentIndex: action.payload,
      };
    }
    case "SET_CURRENT_SLIDE": {
      console.log(state, state.slides, state.currentSlide);
      return {
        ...state,
        currentSlide: state.slides[state.currentIndex],
      };
    }
    default:
      return state;
  }
};