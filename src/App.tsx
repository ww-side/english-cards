import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Screen from './components/common/Screen/index.tsx';
import EnglishCards from './components/pages/EnglishCards';
import ErrorPage from './components/pages/ErrorPage/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen />,
    children: [
      {
        path: '/',
        element: <EnglishCards />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
