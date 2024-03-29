import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './pages/AirportTransfer/Form';
import Success from './pages/Success/Success';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/airport-transfer",
    element: <Form />
  },
  {
    path: "/success", // Add this route
    element: <Success />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
