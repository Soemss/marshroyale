import React from 'react';
import { Typography, Grid } from '@material-ui/core';

function Home(props) {
    return(
        <Grid container justify='center' spacing={4}>
            <Grid item>
                <Typography variant='h2' style={{fontWeight: 400}}>
                    Marsh Royale Home
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Home;