import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
  textColor: "white",
  backgroundColor: "#111",
  borders: "2px solid white",
  borderRadius: "10px"
};

const lightTheme = {
  textColor: "tomato",
  backgroundColor: "white",
  borders: "2px solid red",
  borderRadius: "10px"
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
