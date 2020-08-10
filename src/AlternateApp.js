import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: grey[800]
        }
    }
});

export default class AlternateApp extends React.Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return(
            <Router>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <Switch>
                        <Redirect from='/' to='/home' exact />
                        <Route
                            path='/home'
                            exact
                            component={Home}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </ThemeProvider>
            </Router>
        )
    }
}