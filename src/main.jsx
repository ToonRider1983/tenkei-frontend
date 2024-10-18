import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthContextProvider from './contexts/AuthContext';
import OrderContextProvider from './contexts/orderContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <OrderContextProvider>
      <App />
      </OrderContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
