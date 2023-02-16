import { Grid } from "@mui/material"
import '../css/weather-icons.min.css';

function TodayWeather () {
    //api call goes here

    //do fake variables


    return (
        <Grid item sm={12} sx={{display:"flex"}}>
            <Grid item sm={3}>
                <i className="wi wi-day-sunny" style={{fontSize:"100px"}}></i>
            </Grid>
            <Grid item sm={3} fontSize="35px">
                23 °C <br/> 
                22:00 PM <br/>
                Sun 12/2
            </Grid>
            <Grid item sm={6} style={{fontSize:"33px"}}>Bình Thạnh district <br/> Hồ Chí Minh City</Grid>
        </Grid>
    )
}

export default TodayWeather;