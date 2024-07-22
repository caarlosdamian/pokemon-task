import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Details } from '../pages/Details/Details';
import { Root } from '../pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/:name',
        element: <Details />,
      },
    ],
  },
]);
