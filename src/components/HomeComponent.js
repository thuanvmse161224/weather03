import { Container, Grid } from "@mui/material";
import SearchWeather from "./SearchWeather";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <>
            <p>You are in Homepage</p>
            <p>Maybe show some info of weather at latest location here ?</p>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        Left section
                    </Grid>
                    <Grid item sm={6}>
                        Right section
                    </Grid>

                </Grid>
            </Container>
        </>

    )
};

export default Home;