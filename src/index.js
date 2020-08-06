import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { grey, grey } from 'material-ui/core/colors/grey'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: grey[800]
      // light:
      // dark:
    }
  }
})

render(
  <MuiThemeProvider theme = {theme}>
      <App />
  </MuiThemeProvider>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
