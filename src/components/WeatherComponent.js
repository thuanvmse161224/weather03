import axios from "axios";
import { useEffect, useState } from "react";
import getWeather from "../helpers/WeatherData";
import NextDaysWeather from "./NextDayWeatherComponent";
import TodayWeather from "./TodayWeatherComponent";

const AMOUNT_OF_FUTURE_DAYS = 4;

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function WeatherComponent() {
    const [weather, setWeather] = useState([]);
    useEffect(() => {
        let today = new Date()
        const offset = today.getTimezoneOffset();
        let start_date_DATECLASS = new Date(today.getTime() - (offset*60*1000));
            start_date_DATECLASS = addDays(start_date_DATECLASS,1); //tomorrow, new line for de-clutter
        let end_date_DATECLASS   = addDays(start_date_DATECLASS,AMOUNT_OF_FUTURE_DAYS); //several days later


        let start_date = start_date_DATECLASS.toISOString().split('T')[0];
        let end_date = end_date_DATECLASS.toISOString().split('T')[0];
    
        //end process
        axios.get(
            `https://api.open-meteo.com/v1/forecast?`+
            `latitude=10.7626&`+
            `longitude=106.6601&`+
            `hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&`+
            `models=best_match&`+
            `daily=temperature_2m_max,temperature_2m_min,weathercode&`+
            `current_weather=true&`+
            `timezone=auto&`+
            `start_date=${start_date}&`+
            `end_date=${end_date}`
        ).then(
            (data) => {
                setWeather(data.data);
            }
        ).catch(error => console.log(error.message));
    },[])


    return (
        <>
            {console.log(weather)}
            <TodayWeather weather={weather}/>
            <NextDaysWeather weather={weather} />
        </>
    )

}

export default WeatherComponent;