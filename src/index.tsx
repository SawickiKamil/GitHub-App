import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { CssBaseline } from '@material-ui/core';
import { Routes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
