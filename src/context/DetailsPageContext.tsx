import { createContext, ReactElement, useReducer, useCallback, useContext } from "react";
import data from "../../src/data.json";
import { Image } from "../interfaces";

interface DetailsPageState {
  currentIndex: number;
  slideShowID: number;
  readonly slides: Image[];
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
  resetCurrentIndex: () => void;
  incrementCurrentIndex: ()  => void;
  decrementCurrentIndex: ()  => void;
  startSlideshow: ()=>void;
  stopSlideshow: ()=>void;
}

const INITIAL_STATE: DetailsPageState = {
  currentIndex: 0,
  slideShowID:  0,
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
      if (action.payload === null || action.payload === undefined) {
        return state;
      }
      return {
        ...state,
        currentIndex: action.payload,
      };
    }

    case "INCREMENT_CURRENT_INDEX": {
      return {
        ...state,
        currentIndex: state.currentIndex++
      }
    }

    case "DECREMENT_CURRENT_INDEX": {
      return {
        ...state,
        currentIndex: state.currentIndex--
      }
    }

    case "SET_CURRENT_SLIDE": {
      return {
        ...state,
        currentSlide: state.slides[state.currentIndex],
      };
    }
    case "SET_SSID" :{
      if (action.payload === null || action.payload === undefined) {
        return state;
      }      

      return {
        ...state,
        slideShowID: action.payload
      }
    }
    case "RESET_SSID" :{     
      return {
        ...state,
        slideShowID: 0
      }
    }
    
    case "RESET_CURRENT_INDEX" : {
      return {
        ...state,
        currentIndex: 0
      }
    }
    default:
      return state;
  }
};

const useDetailsContext = (intialState: DetailsPageState):useDetailsContext => {
  const [state , dispatch] = useReducer(reducer , intialState);

  const updateIndex = useCallback((id: number) => dispatch({type:"SET_CURRENT_INDEX", payload: id}), []);
  const incrementCurrentIndex = useCallback(()=> dispatch({type: "INCREMENT_CURRENT_INDEX"}),[])
  const decrementCurrentIndex = useCallback(()=> dispatch({type: "DECREMENT_CURRENT_INDEX"}),[])
  const setSlide = useCallback(() => dispatch({type: "SET_CURRENT_SLIDE"}), []);
  const resetCurrentIndex = useCallback(()=> dispatch({type: "RESET_CURRENT_INDEX"}),[])

  const startSlideshow = ()=> {
    if(state.slideShowID === 0){
      const num = setInterval(()=>{
        if(state.currentIndex + 1 > state.slides.length - 1){
          updateIndex(state.currentIndex = -1);
        } 
        updateIndex(state.currentIndex += 1)
      }, 2000)
      dispatch({type: "SET_SSID" , payload: num})
    } 
  }

  const stopSlideshow = ()=>{
    if(state.slideShowID !== 0){
      clearInterval(state.slideShowID);
      dispatch({type: "RESET_SSID"});
    }
  }
  return { state, updateIndex , setSlide , resetCurrentIndex, incrementCurrentIndex,  decrementCurrentIndex, startSlideshow, stopSlideshow}

}

const initalContextState: useDetailsContext = {
  state: INITIAL_STATE,
  updateIndex: (id: number) =>{},
  setSlide: () => {},
  resetCurrentIndex: () => {},
  incrementCurrentIndex: ()=>{},
  decrementCurrentIndex: ()=>{},
  startSlideshow: ()=>{},
  stopSlideshow: ()=>{}
}

export const DetailsContext = createContext<useDetailsContext>(initalContextState);

export const DetailsPageProvider = ({
  children
}: Children): ReactElement =>{
  return (
    <DetailsContext.Provider value={useDetailsContext(INITIAL_STATE)}>
      {children}
    </DetailsContext.Provider>
  )
}

export const useDetails = ():useDetailsContext => {
  const {state, setSlide, updateIndex, resetCurrentIndex, incrementCurrentIndex,  decrementCurrentIndex, startSlideshow, stopSlideshow} = useContext(DetailsContext);
  return { state, setSlide, updateIndex , resetCurrentIndex, incrementCurrentIndex, decrementCurrentIndex, startSlideshow, stopSlideshow}
}

export const useCurrentSlide = () => {
  const {state : { currentSlide, currentIndex }, setSlide, updateIndex, incrementCurrentIndex, decrementCurrentIndex } = useContext(DetailsContext);
  return { currentSlide, currentIndex, setSlide, updateIndex, incrementCurrentIndex, decrementCurrentIndex }
}

export const useSlideShow = () => {
  const { state : { slideShowID }, startSlideshow, stopSlideshow , resetCurrentIndex } = useContext(DetailsContext);
  return { slideShowID, startSlideshow, stopSlideshow, resetCurrentIndex }
}