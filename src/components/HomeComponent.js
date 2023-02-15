import { Container, Grid, Typography } from "@mui/material";
import SearchPage from "./SearchPageComponent";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import useDocumentTitle from '../helpers/useDocumentTitle';

import '../css/weather-icons.min.css';

function Home() {
    useDocumentTitle('Homepage - Weather Watcher');
    return (
        <>
            <Container sx={{mt:"30px",mb:"30px"}}>
                <Grid container spacing={2} sx={{display:"flex"}}>
                    <Grid item sm={8} >
                        <Box sx={{backgroundColor : "#ff232323", padding: "15px"}}>
                            <p>You are in Homepage</p>
                            <p>Maybe show some info of weather at latest location here ?</p>
                            <Grid container spacing={2} sx={{display:"flex", p: "15px!important", fontFamily: "Public Sans, Helvetica"}}>
                                <Grid item sm={12} sx={{display:"flex"}}>
                                    <Grid item sm={3}>
                                        <i class="wi wi-day-sunny" style={{fontSize:"100px"}}></i>
                                    </Grid>
                                    <Grid item sm={3} fontSize="35px">
                                        23 °C <br/> 
                                        22:00 PM <br/>
                                        Sun 12/2
                                    </Grid>
                                    <Grid item sm={6} style={{fontSize:"33px"}}>Bình Thạnh district <br/> Hồ Chí Minh City</Grid>
                                </Grid>
                                <Grid item columns={15} sm={12} sx={{display:"flex", mt:"30px"}}>
                                    <Grid item sm={3}>
                                        <i class="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                                        Mon 13/2<br/><br/>
                                        32 °C - 23 °C
                                    </Grid>
                                    <Grid item sm={3}>
                                        <i class="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                                        Tue 14/2<br/><br/>
                                        32 °C - 23 °C
                                    </Grid>
                                    <Grid item sm={3}>
                                        <i class="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                                        Wed 15/2<br/><br/>
                                        32 °C - 23 °C
                                    </Grid>
                                    <Grid item sm={3}>
                                        <i class="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                                        Thu 16/2<br/><br/>    
                                        32 °C - 23 °C
                                    </Grid>
                                    <Grid item sm={3}>
                                        <i class="wi wi-night-sleet" style={{fontSize:"33px",marginBottom:"20px"}}></i><br/>
                                        Fri 17/2<br/><br/>    
                                        32 °C - 23 °C
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box sx={{backgroundColor : "#ff232323", p: "15px"}}>
                            <Typography fontSize="40px">
                                Weather Watcher
                            </Typography>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>

    )
};

export default Home;