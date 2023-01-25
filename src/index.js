import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import FormComponent from './container/form/FormComponent';
import Aggrid from './container/aggrid/Aggrid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormComponent />,
  },
  {
    path: '/grid',
    element: <Aggrid />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
