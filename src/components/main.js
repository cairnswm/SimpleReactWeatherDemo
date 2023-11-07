import { useEffect, useState } from "react";
import { useLocation } from "./useLocation";

function Main(props) {
    const { location } = useLocation()
    const [weather, setweather] = useState({ location: {}, locationNumber: ""})

    useEffect(() => {
        console.log("location in Main",location)
        if (location) {
            fetch(`https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q=${location}`)
            .then(res => res.json())
            .then(response => {
                console.log("DATA RETURNED", response)
                setweather(response);
            });
        }
    },[location])

    return (<div>
        <h1>Main Page</h1>
        Location: {location ? location : "No location entered"}
        {(weather && weather.location && weather.location.name) ?
            <div>
                City: {weather.location.name}<br/>
                Country: {weather.location.country}<br/>
                Weather: <img src={weather.current.condition.icon} alt={weather.current.condition.text} /><br/>
                Temperature: {weather.current.temp_c}<br/>
            </div>
        : null }
    </div>)
}


export default Main;