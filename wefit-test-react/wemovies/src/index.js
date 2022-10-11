import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardProvider } from './context/CartContext';

import RoutesList from './routes';

import { GlobalStyles } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardProvider>
      <GlobalStyles />
      <RoutesList />
    </CardProvider>
  </React.StrictMode>
);
