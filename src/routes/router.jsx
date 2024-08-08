import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import Login from './../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import AddItems from '../pages/AddItems';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './../error/ErrorPage';
import AllItems from '../pages/AllItems';
import ViewDetails from '../pages/ViewDetails';
import MyList from '../pages/MyList';
import SubCategory from '../pages/SubCategory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>
          fetch('https://craft-canvas-server-hazel.vercel.app/items'),
      },
      {
        path: '/allItems',
        element: <AllItems />,
        loader: () =>
          fetch('https://craft-canvas-server-hazel.vercel.app/items'),
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
        path: '/items/:id',
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://craft-canvas-server-hazel.vercel.app/items/${params.id}`
          ),
      },
      {
        path: '/myList',
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: () =>
          fetch('https://craft-canvas-server-hazel.vercel.app/items'),
      },
      {
        path: '/:subcategory_name',
        element: <SubCategory />,
        loader: () =>
          fetch('https://craft-canvas-server-hazel.vercel.app/items'),
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
