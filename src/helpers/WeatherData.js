

const getWeather = async () => {
    const api_call_theSecond = await fetch(``+
    `https://api.open-meteo.com/v1/forecast?`+
        `latitude=10.7626&`+
        `longitude=106.6601&`+
        `hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode&`+
        `models=best_match&`+
        `daily=temperature_2m_max,temperature_2m_min&current_weather=true&`+
        `timezone=auto&`+
        `start_date=2023-02-16&`+
        `end_date=2023-02-22`+
    ``);
    
    const weatherData = await api_call_theSecond.json();
    console.log(weatherData);

    return weatherData;
}

export default getWeather;