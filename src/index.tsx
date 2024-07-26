import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routes/AppRouter';
import './index.css'; // Adjust this import if needed

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
