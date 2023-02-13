import { Container, Grid } from "@mui/material";
import SearchPage from "./SearchPageComponent";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import useDocumentTitle from '../helpers/useDocumentTitle';

function Home() {
    const title = useDocumentTitle('Homepage - Weather Watcher');
    return (
        <>
            <Container sx={{m : "15px"}}>
                <Grid container spacing={2}>
                    <Grid item sm={8}>
                    <p>You are in Homepage</p>
                    <p>Maybe show some info of weather at latest location here ?</p>
                    </Grid>
                    <Grid item sm={4}>
                        <p>Right section</p>
                    </Grid>

                </Grid>
            </Container>
        </>

    )
};

export default Home;