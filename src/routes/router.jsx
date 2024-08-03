import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from './../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import AddItems from '../pages/AddItems';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/addItems',
        element: (
          <PrivateRoute>
            <AddItems />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
