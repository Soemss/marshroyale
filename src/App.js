import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Redirect from='/' to='/home' exact />
                    <Route
                        path='/home'
                        exact
                        component={Home}
                    />
                </Switch>
            </Router>
        )
    }
}

export default App;
