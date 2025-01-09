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
import GetInvolvedPageFactory from '../../test/factories/strapi/GetInvolvedPageFactory';
import GetInvolvedPage from './GetInvolvedPage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('GetInvolvedPage', () => {
  const mockLoaderData = {
    getInvolvedPageStrapiData: new GetInvolvedPageFactory().getMockData(),
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
          <GetInvolvedPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the get involved landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-card-desktop')).toBeInTheDocument();
      });
    });

    test('should render the get involved page sections when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getAllByTestId('get-involved-page-section-title').length
        ).toBe(4);
      });
    });

    test('should render payment section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('payment-section')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
