import { Grid } from "@mui/material"
import '../css/weather-icons.min.css';
const weekDaysName = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function GetTimeString({date}) {
    let hours = date.getHours();
    let min = date.getMinutes();
    let hoursString = hours < 10 ? "0" : "";
    let minString  = min < 10 ? "0" : "";

    const modifierDayNight = (0 <= hours && hours <= 11) ? "AM" : (12 <= hours && hours <= 23 ) ? "PM" : "ERROR";
    
    return (
        <>
            {hoursString + hours + ":" + minString + min + ' ' + modifierDayNight}        </>
    )
}

function TodayWeather ({weather}) {
    //api call goes here
    if (weather.length !== 0) {
        //do fake variables
        const weatherNow = weather.current_weather;
        const dateNow = new Date(weatherNow.time);

        return (
            <Grid item sm={12} sx={{display:"flex"}}>
                <Grid item sm={3}>
                    <i className={`wi wi-wmo4680-${weatherNow.weathercode}`} style={{fontSize:"100px"}}></i>
                </Grid>
                <Grid item sm={3} fontSize="35px">
                    {weatherNow.temperature} °C <br/> 
                    <GetTimeString date={dateNow} />
                    {weekDaysName.at(dateNow.getDay() - 1) + ' ' + dateNow.getMonth() + '/' + dateNow.getDate()} <br/>
                </Grid>
                <Grid item sm={6} style={{fontSize:"33px"}}>Bình Thạnh district <br/> Hồ Chí Minh City</Grid>
            </Grid>
        )
    }
    else {
        return (
            <Grid item sm={12} sx={{display:"flex"}}>
                <Grid item sm={3}>
                    <i className="wi wi-day-sunny" style={{fontSize:"100px"}}></i>
                </Grid>
                <Grid item sm={3} fontSize="35px">
                    Loading... <br/>
                </Grid>
                <Grid item sm={6} style={{fontSize:"33px"}}>Bình Thạnh district <br/> Hồ Chí Minh City</Grid>
            </Grid>
        )
    }

}

export default TodayWeather;