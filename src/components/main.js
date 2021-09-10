import { useContext, useEffect, useState } from "react";
import ContactContext from './locationContext'

import axios from "axios";

function Main(props) {
    const { location } = useContext(ContactContext)
    const [weather, setweather] = useState({ location: {}, locationNumber: ""})

    useEffect(() => {
        console.log("location in Main",location)
        if (location) {
            axios({
                method: 'get',
                url: 'https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q='+location,
            }).then(response => {
                console.log("DATA RETURNED", response)
                setweather(response.data);
            });
        }
    },[location])

    return (<div>
        <h1>Main Page</h1>
        Location: {location ? location : "No location entered"}
        {(weather.location && weather.location.name) ?
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