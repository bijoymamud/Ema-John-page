import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import Inventory from './components/Inventory/Inventory';
import Home from './components/Layout/Home';
import LogIn from './components/LogIn/LogIn';
import Orders from './components/Orders/Orders';
import AuthProvider from './components/providers/AuthProvider';
import Shop from './components/Shop/Shop';
import SignUp from './components/SingUp/SignUp';
import cartProductsLoader from './Loaders/cardProductsLoader';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>

      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },

      {
        path: 'logIn',
        element: <LogIn></LogIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)


