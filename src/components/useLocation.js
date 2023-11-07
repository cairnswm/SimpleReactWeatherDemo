import { useContext } from "react";
import { LocationContext } from "./locationContext";

export const useLocation = () => {
    // get the context
    const context = useContext(LocationContext);
  
    // if `undefined`, throw an error
    if (!context) {
      throw new Error("useLocation was used outside of its Provider");
    }
    const { location, setLocation } = context;
  
    return {location, setLocation};
  };

export default useLocation;  