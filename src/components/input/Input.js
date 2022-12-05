import './Input.css';
import WeatherAPI from '../weatherAPI/WeatherAPI';
import React, { useState, useRef } from 'react';

export default function Input() {
    const inputRef = useRef();
    const [city, setCity] = useState('Düsseldorf');

    return (
        <div>
            <h1>Wetter</h1>
            <button onClick={() => setCity("Düsseldorf")}>Düsseldorf</button>
            <button onClick={() => setCity("Köln")}>Köln</button>
            <button onClick={() => setCity("Berlin")}>Berlin</button>
            <button onClick={() => setCity("Hamburg")}>Hamburg</button>
            <div className='flex'>
                <input ref={inputRef} placeholder="City"></input>
                <button onClick={() => setCity(inputRef.current.value)}>Suchen</button>
            </div>
            <WeatherAPI city={city} />
        </div>
    );
}
