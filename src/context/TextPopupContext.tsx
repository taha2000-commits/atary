/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useReducer,
  type PropsWithChildren,
} from "react";

type StateType = {
  isOpen: boolean;
  text: string;
};
const initState = {
  isOpen: false,
  text: "",
};
const TextPopupContext = createContext<{
  closePopup: () => void;
  openPopup: (text: string) => void;
  state: StateType;
}>({ closePopup: () => {}, openPopup: () => {}, state: initState });
const reducer = (
  state: StateType,
  action: { type: "ADD_TEXT" | "CLOSE"; payload?: string },
) => {
  switch (action.type) {
    case "ADD_TEXT":
      return { ...state, text: action.payload || "", isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false, text: "" };
    default:
      return state;
  }
};

export const TextPopupContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const openPopup = (text: string) => {
    dispatch({ type: "ADD_TEXT", payload: text });
  };
  const closePopup = () => {
    dispatch({ type: "CLOSE" });
  };
  return (
    <TextPopupContext.Provider value={{ closePopup, openPopup, state }}>
      {children}
    </TextPopupContext.Provider>
  );
};

export const useTextPopupContext = () => {
  return useContext(TextPopupContext);
};
