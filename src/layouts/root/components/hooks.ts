import { useContext } from 'react';

import { RootLayoutContext } from '@/layouts/root/components/context';

export function useRootLayout() {
  const context = useContext(RootLayoutContext);

  if (!context) {
    throw new Error('useRootLayout must be used within a PageProvider');
  }

  return context;
}