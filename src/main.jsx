import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SkeletonPage, { loader as skeletonPageLoader } from './SkeletonPage';
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultPage, { loader as defaultPageLoader } from './DefaultPage';
import Root from './Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/default",
                element: <DefaultPage />,
                loader: defaultPageLoader
            },
            {
                path: "/skeleton",
                element: <SkeletonPage />,
                loader: skeletonPageLoader
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
