import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const rootElem = document.getElementById('root');
const root = rootElem && ReactDOM.createRoot(rootElem);
root &&
  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
// reportWebVitals();
