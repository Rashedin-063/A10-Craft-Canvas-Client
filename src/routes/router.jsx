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
        loader: () => fetch('http://localhost:5000/items'),
      },
      {
        path: '/allItems',
        element: <AllItems />,
        loader: () => fetch('http://localhost:5000/items'),
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
          fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: '/myList',
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/items'),
      },
      {
        path: '/subCategory',
        element: <SubCategory />,
        loader: () => 'http://localhost:5000/items',
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
