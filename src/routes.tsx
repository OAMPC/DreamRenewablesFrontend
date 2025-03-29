import { createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './routesConfig';

const createRoutes = async () => {
  return createBrowserRouter(routesConfig);
};

export default createRoutes;
