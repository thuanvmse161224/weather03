import {Grid, Typography, Box, Container} from '@mui/material'; 
import '../css/weather-icons.min.css';

const weekDaysName = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

function SmallDayWeather({data}) {
    return (
        <Grid item sm={3}>
            <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
            Mon 13/2<br/><br/>
            32 °C - 23 °C
        </Grid>
    );
}

function NextDaysWeather() {
    return (
        <>
            <Grid item columns={15} sm={12} sx={{display:"flex", mt:"30px"}}>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Mon 13/2<br/><br/>
                    32 °C - 23 °C
                </Grid>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Tue 14/2<br/><br/>
                    32 °C - 23 °C
                </Grid>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Wed 15/2<br/><br/>
                    32 °C - 23 °C
                </Grid>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Thu 16/2<br/><br/>    
                    32 °C - 23 °C
                </Grid>
                <Grid item sm={3}>
                    <i className="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                    Fri 17/2<br/><br/>    
                    32 °C - 23 °C
                </Grid>
            </Grid>
        </>
    )

}

export default NextDaysWeather;    