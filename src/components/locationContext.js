import React, { createContext, useState } from "react";

// create context
const LocationContext = createContext();

const LocationProvider = (props) => {
  const { children } = props;

  const [location, setLocation] = useState();

  return (
    // the Provider gives access to the context to its children
    <LocationContext.Provider value={{location, setLocation}}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationContext, LocationProvider };
export default LocationProvider;