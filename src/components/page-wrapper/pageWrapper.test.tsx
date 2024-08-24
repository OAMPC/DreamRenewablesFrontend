import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, Mock, test, vi } from 'vitest';
import {
  getFooterStrapiData,
  getNavigationBarStrapiData,
} from '../../api/strapiApi';
import useWindowDimensions from '../../hooks/windowDimensions';
import footerFactory from '../../test/factories/strapi/footerFactory';
import navigationBarFactory from '../../test/factories/strapi/navigationBarFactory';
import PageWrapper from './PageWrapper';

vi.mock('../../api/strapiApi', () => ({
  getNavigationBarStrapiData: vi.fn(),
  getFooterStrapiData: vi.fn(),
}));

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('PageWrapper', () => {
  const queryClient = new QueryClient();

  beforeEach(() => {
    const { mockData: navigationMockData } = navigationBarFactory();
    const { mockData: footerMockData } = footerFactory();

    (getNavigationBarStrapiData as Mock).mockResolvedValue(
      navigationMockData.data.attributes
    );

    (getFooterStrapiData as Mock).mockResolvedValue(
      footerMockData.data.attributes
    );

    (useWindowDimensions as Mock).mockReturnValue({ width: 1024 });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <PageWrapper>
            <h1>I am a child</h1>
          </PageWrapper>
        </MemoryRouter>
      </QueryClientProvider>
    );
  });

  describe('render components', async () => {
    test('should render render footer after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('footer')).toBeInTheDocument();
      });
    });

    test('should render render navigation bar after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
      });
    });

    test('should render the child component', () => {
      expect(screen.getByText('I am a child')).toBeInTheDocument();
    });
  });
});
