import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, element: <div>This is home</div>},
      {
        path: "listed-books",
        element: <div>This is listed books</div>
      },
      {
        path: "pages-to-read",
        element: <div>This is pages to read</div>
      }
     
    ]
  }

])

