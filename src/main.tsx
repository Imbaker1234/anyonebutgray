import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/global.css';
import './styles/themes.css';
import { App } from './App';

const redirectRoute = new URLSearchParams(window.location.search).get('route');

if (redirectRoute) {
  window.history.replaceState(null, '', `${import.meta.env.BASE_URL}${redirectRoute.replace(/^\//, '')}`);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
