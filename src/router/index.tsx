import { createBrowserRouter, Navigate } from 'react-router-dom';

import RootLayout from '@/layouts/root';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        lazy: () => import('@/pages/home/index'),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;