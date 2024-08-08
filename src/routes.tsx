import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './app/pages/landing-page/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
]);

export default router;
