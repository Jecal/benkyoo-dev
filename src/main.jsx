import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// pages
import LandingPage from './pages/LandingPage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import NoteDisplayPage from './pages/NoteDisplayPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/notes',
    element: <NoteDisplayPage />,
    errorElement: <ErrorPage />
  }
]);

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)