import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { SharedDataContext } from '../../contexts/SharedDataProvider';
import FooterFactory from '../factories/strapi/FooterFactory';
import NavigationBarFactory from '../factories/strapi/NavigationBarFactory';
import { render } from '@testing-library/react';

export function renderWithProviders(element: React.ReactElement) {
  const navigationBarStrapiData = new NavigationBarFactory().getMockData();
  const footerStrapiData = new FooterFactory().getMockData();

  return render(
    <QueryClientProvider client={createTestQueryClient()}>
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationBarStrapiData,
          footerContent: footerStrapiData,
        }}
      >
        <MemoryRouter>{element}</MemoryRouter>
      </SharedDataContext.Provider>
    </QueryClientProvider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
}
