import { createContext, ReactElement, useReducer, useCallback, useContext } from "react";
import data from "../../src/data.json";
import { Image } from "../interfaces";

interface DetailsPageState {
  currentIndex: number;
  slides: Image[];
  currentSlide: Image;
}

interface DetailsPageAction  {
  type: string;
  payload?: number;
}

interface Children {
  children?:  ReactElement[] | ReactElement | undefined
}

interface useDetailsContext {
  state: DetailsPageState;
  updateIndex: (id: number) => void;
  setSlide: () => void;
}

const INITIAL_STATE: DetailsPageState = {
  currentIndex: 0,
  slides: data,

  currentSlide: {
    id: 0,
    name: "",
    year: 0,
    description: "",
    source: "",
    images: {
      hero: {
        small: "",
        large: ""
      },
      thumbnail: "",
      gallery: ""
    },
    artist: {
      image: "",
      name: ""
    },

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
      return {
        ...state,
        currentSlide: state.slides[state.currentIndex],
      };
    }
    default:
      return state;
  }
};