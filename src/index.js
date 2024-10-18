import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { ProductProvider } from './Context';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
//  <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //</ProductProvider>

);

reportWebVitals();
