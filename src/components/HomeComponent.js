import { Container, Grid } from "@mui/material";
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
                        <Box sx={{backgroundColor : "#ff232323", p: "15px"}}>
                            <p>You are in Homepage</p>
                            <p>Maybe show some info of weather at latest location here ?</p>
                            <Grid container spacing={2} sx={{display:"flex"}}>
                                <Grid item sm={12} sx={{display:"flex"}}>
                                    <Grid item sm={3}>cloud</Grid>
                                    <Grid item sm={3}>temp</Grid>
                                    <Grid item sm={6}>city name</Grid>
                                </Grid>
                                <Grid item sm={12} sx={{display:"flex"}}>
                                    <Grid item sm={3}>next day 1
                                        <i class="wi wi-night-sleet"></i>
                                    </Grid>
                                    <Grid item sm={3}>next day 2</Grid>
                                    <Grid item sm={3}>next day 3</Grid>
                                    <Grid item sm={3}>next day 4</Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item sm={4}>
                        <Box sx={{backgroundColor : "#ff232323", p: "15px"}}>
                            <p>Right section</p>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </>

    )
};

export default Home;