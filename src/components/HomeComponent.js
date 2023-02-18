import { Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

import useDocumentTitle from '../helpers/useDocumentTitle';
import getWeather from "../helpers/WeatherData";

import NextDaysWeather from "./NextDayWeatherComponent";
import TodayWeather from "./TodayWeatherComponent";
import WeatherComponent from "./WeatherComponent";

function Home() {
    useDocumentTitle('Homepage - Weather Watcher');
    return (
        <>
            <Container sx={{mt:"30px",mb:"30px"}}>
                <Grid container spacing={2} sx={{display:"flex"}}>
                    <Grid item sm={8} >
                        <Box sx={{backgroundColor : "#ff232323", padding: "15px"}}>
                            <Grid container spacing={2} sx={{display:"flex", p: "15px!important", fontFamily: "Public Sans, Helvetica"}}>
                                <WeatherComponent/>
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