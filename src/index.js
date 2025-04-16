import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@assets/css/index.less'
import 'normalize.css'
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router'
import store from './store'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import mui_theme from '@/assets/theme/mui_theme'
import theme from './assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={mui_theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
  //</React.StrictMode>
);