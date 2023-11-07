import { useState } from "react";
import { useLocation } from "./useLocation";

function Header(props) {
    const [locationName, setLocationName] = useState("")
    const { setLocation } = useLocation()

    const doSearch = () => {
        console.log("location",locationName)
        setLocation(locationName);
    }
    return   (
          <header className="App-header">
            <label>What is your Location</label>
            <input type="tel" onChange={(e) => setLocationName(e.target.value)} value={locationName}></input>
            <button onClick={doSearch} >Search</button>
          </header>
      );
}

export default Header;