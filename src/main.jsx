import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AuthContextProvider from './contexts/AuthContext';
import OrderContextProvider from './contexts/orderContext';
import PurchaseContextProvider from './contexts/PurchaseContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <OrderContextProvider>
    <PurchaseContextProvider>
      <App />
      </PurchaseContextProvider>
      </OrderContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
