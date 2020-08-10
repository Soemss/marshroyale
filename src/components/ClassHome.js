import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

class Home extends React.Component {
    constructor(props) {
        super();

        this.props = props;
    }
    state = {
        isOpen: false
    }
    setOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return(
            <>
                <Grid container justify='center' spacing={4}>
                    <Grid item>
                        <Typography variant='h2' style={{fontWeight: 400}}>
                            Marsh Royale Home
                        </Typography>
                    </Grid>
                </Grid>
                <Button size='small' color='primary' variant='filled' onClick={this.setOpen}>fortnite</Button>
                { this.state.isOpen
                    ? (
                        <Typography variant='h4'>
                            fortnite
                        </Typography>
                    )
                    : null
                }
            </>
        );
    }
}

export default Home;