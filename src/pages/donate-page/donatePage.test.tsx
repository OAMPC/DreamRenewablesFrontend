import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, useLoaderData } from 'react-router-dom';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from 'vitest';
import navigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';
import DonatePageFactory from '../../test/factories/strapi/DonatePageFactory';
import DonatePage from './DonatePage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('DonatePage', () => {
  const mockLoaderData = {
    donatePageStrapiData: new DonatePageFactory().getMockData(),
  };

  const navigationBarStrapiData = new navigationBarFactory().getMockData();
  const footerStrapiData = new FooterFactory().getMockData();

  const setup = async () => {
    (useLoaderData as Mock).mockReturnValue(mockLoaderData);
    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationBarStrapiData,
          footerContent: footerStrapiData,
        }}
      >
        <MemoryRouter>
          <DonatePage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the donate page landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-desktop')).toBeInTheDocument();
      });
    });

    test('should render the donate page pre metric text when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-pre-metric-text')
        ).toBeInTheDocument();
      });
    });

    test('should render the donate page metrics when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('stat-template-page-metric').length).toBe(
          2
        );
      });
    });

    test('should render the donate page post metric text when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-post-metric-text')
        ).toBeInTheDocument();
      });
    });

    test('should render the donate page payment section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('donate-page-payment-section')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
