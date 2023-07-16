import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Screen from './components/common/Screen/index.tsx';
import EnglishCards from './components/pages/EnglishCards/index.tsx';
import ErrorPage from './components/pages/ErrorPage/index.tsx';
import EnglishTest from './components/pages/EnglishTest/index.tsx';
import Home from './components/pages/Home/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Screen />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cards',
        element: <EnglishCards />,
      },
      {
        path: '/test',
        element: <EnglishTest />,
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
