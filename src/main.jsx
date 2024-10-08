import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './contexts/ThemeProvider';
import AuthProvider from './contexts/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
