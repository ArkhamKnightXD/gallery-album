import React, {useState} from 'react';
import './weather.css';


const api = {
    key: "c204daef7d9d00d4ee62ca961cf4476b",
    base: "https://api.openweathermap.org/data/2.5/"
}

export default function WeatherApp() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {

                    setWeather(result);
                    setQuery('');

                });
        }
    }


    const dateBuilder = (d) => {
        let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        let days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    return (


        <div style={{marginTop: 76}} id="app01" className={

            //En primer lugar se verifica que haya datos para elegir el fondo por defecto.
            // En la segunda verificacion, se verifica que la temperatura sea mayor a 16 grados y si es mayor elige la imagen de fondo.
            (typeof weather.main != "undefined" ) ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>

            <main>

                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..."
                           onChange={e => setQuery(e.target.value)}
                           value={query} onKeyPress={search}/>
                </div>

                {(typeof weather.main != "undefined") ? (
                    <div>

                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>

                        <div className="weather-box">
                            <div className="temp">

                                {/*Math.round sirve para redondear los numeros al entero mas cercano.*/}
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className="weather">{weather.weather[0].main}</div>
                        </div>
                    </div>
                ) : ('')}

            </main>

        </div>
    );
}
