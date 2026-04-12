/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from "react";

type StateType = {
  isOpen: boolean;
  url: string;
};
const initState = {
  isOpen: false,
  url: "",
};
const VideoPopupContext = createContext<{
  closePopup: () => void;
  openPopup: (url: string) => void;
  state: StateType;
}>({ closePopup: () => {}, openPopup: () => {}, state: initState });
const reducer = (
  state: StateType,
  action: { type: "ADD_URL" | "CLOSE"; payload?: string },
) => {
  switch (action.type) {
    case "ADD_URL":
      return { ...state, url: action.payload || "", isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false, text: "" };
    default:
      return state;
  }
};

export const VideoPopupContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const openPopup = (url: string) => {
    dispatch({ type: "ADD_URL", payload: url });
  };
  const closePopup = () => {
    dispatch({ type: "CLOSE" });
  };
  return (
    <VideoPopupContext.Provider value={{ closePopup, openPopup, state }}>
      {children}
    </VideoPopupContext.Provider>
  );
};

export const useVideoPopupContext = () => {
  return useContext(VideoPopupContext);
};
