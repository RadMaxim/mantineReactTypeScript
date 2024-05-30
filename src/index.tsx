import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter,createBrowserRouter } from 'react-router-dom';


const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'red',
});



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider theme={theme} > 
    <React.StrictMode>
      <BrowserRouter>
      <App  />
      </BrowserRouter>
    
  </React.StrictMode>
  </MantineProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
