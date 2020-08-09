import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import { createMuiTheme } from '@material-ui/core';

class App extends React.Component {
    constructor() {
        super();
    }


    render() {


    function App() {
        const theme = createMuiTheme({
            primary: grey[800]
        })
    
        return(
            <Router>
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
            </Router>
        )
    }
}
}

export default App;
