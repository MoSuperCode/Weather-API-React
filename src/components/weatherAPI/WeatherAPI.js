import './WeatherAPI.css';

import React, { useEffect, useState } from 'react';

export default function WeatherAPI({ city }) {
    console.log(city);
    const [weatherInCity, setCity] = useState([]);

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=661761509dd76637b50a6a59dbb6daa5&units=metric&lang=de`;
    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((weatherData) => {
                console.log(weatherData);
                setCity(weatherData);
            });
    }, [API]);

    if (weatherInCity.main === undefined) return;

    return (
        <div>
            <h2>{weatherInCity?.weather[0]?.description} in {city} <img src={`http://openweathermap.org/img/wn/${weatherInCity.weather.at(0).icon}@2x.png`}></img></h2>
            <p>{weatherInCity?.main?.temp}°C</p>
            <p>{weatherInCity?.wind?.speed}m/s</p>

        </div>
    );
}
