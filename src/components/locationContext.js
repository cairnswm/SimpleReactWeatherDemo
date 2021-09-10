import { createContext } from "react";

const locationContext = createContext({
  location: false,
  setLocation: (locationName) => {}
});

export default locationContext;