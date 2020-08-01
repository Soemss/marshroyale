import React from 'react';
import { Typography, Grid } from '@material-ui/core';

class Home extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }

    render() {
        return(
            <Grid container justify='center' spacing={4}>
                <Grid item>
                    <Typography variant='h2' style={{fontWeight: 400}}>
                        Marsh Royale
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

export default Home;