import {Grid, Typography, Box, Container} from '@mui/material'; 
import '../css/weather-icons.min.css';

const weekDaysName = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function SmallDayWeatherDataProcess({weatherDailyData}) {
    let json = weatherDailyData;
    let array = [];
    
    for (let index = 0; index < 5; index++) {
        const min_temp = json.temperature_2m_min[index];
        const max_temp = json.temperature_2m_max[index];
        const date = new Date(json.time[index]);
        const date_string = weekDaysName.at(date.getDay() - 1) + ' ' + date.getMonth() + '/' + date.getDate();
        const weathercode = json.weathercode[index];
        array.push({min_temp, max_temp, date_string, weathercode});
    }

    console.log(array);
    return array.map((weather_at_date) => (
        <>
            <Grid item sm={3}>
                <i  className={`wi wi-wmo4680-${weather_at_date.weathercode}`} 
                    style={{fontSize:"33px",marginBottom:"20px"}}
                /><br/>
                {weather_at_date.date_string}<br/><br/>
                {weather_at_date.min_temp} °C - {weather_at_date.max_temp} °C
            </Grid>
        </>
    ));
}




function NextDaysWeather({weather}) {
    if (weather.length === 0) {
        console.log("in nextdays");
        console.log(weather);
        return (
            <Grid item columns={15} sm={12} sx={{display:"flex", mt:"30px"}}>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Date DD/MM<br/><br/>
                    MIN_TEMP °C - MAX_TEMP °C
                </Grid>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Date DD/MM<br/><br/>
                    MIN_TEMP °C - MAX_TEMP °C
                </Grid>                
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Date DD/MM<br/><br/>
                    MIN_TEMP °C - MAX_TEMP °C
                </Grid>                
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Date DD/MM<br/><br/>
                    MIN_TEMP °C - MAX_TEMP °C
                </Grid>                
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Date DD/MM<br/><br/>
                    MIN_TEMP °C - MAX_TEMP °C
                </Grid>
            </Grid>
        )
    } else {
        console.log("Next days have values");
        return (
            <>
                <Grid item columns={15} sm={12} sx={{display:"flex", mt:"30px"}}>
                    {console.log(weather.daily)}
                    <SmallDayWeatherDataProcess weatherDailyData={weather.daily} />
                </Grid>
            </>
        )
    }

}

export default NextDaysWeather;    