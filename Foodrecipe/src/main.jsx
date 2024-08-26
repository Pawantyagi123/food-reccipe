import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FoodProvider } from '../src/Components/FoodContext'; // Import the provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>
);

