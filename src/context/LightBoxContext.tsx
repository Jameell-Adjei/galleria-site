import { createContext, ReactElement, useReducer, useCallback, useContext, Children } from "react";

interface Children {
    children?:  ReactElement[] | ReactElement | undefined
}

interface LightBoxAction {
    type: string;
}

const INITIAL_STATE = {
    open : false
}

const reducer = (state: { open: boolean }, action: LightBoxAction)=>{
    if(action.type === "SET_OPEN"){
        return {
            ...state,
            open: !state.open
        }
    }
    return state;
}

const useLightBoxContext = (intialState: { open: boolean })=>{  
    const [state , dispatch] = useReducer(reducer , intialState);

    const changeLightBox = ()=>{dispatch({type: "SET_OPEN"})};

    return { state , changeLightBox };
}

const initalContextState = {
    state: INITIAL_STATE,
    changeLightBox: ()=> {}
}

export const LightBoxContext = createContext(initalContextState);

export const LightBoxProvider = ({children} : Children):ReactElement =>{
    return(
        <LightBoxContext.Provider value={useLightBoxContext(INITIAL_STATE)}>
            {children}
        </LightBoxContext.Provider>
    )
}

export const useLightBox =()=>{
    const { state: { open }, changeLightBox } = useContext(LightBoxContext);
    return { open , changeLightBox }
}