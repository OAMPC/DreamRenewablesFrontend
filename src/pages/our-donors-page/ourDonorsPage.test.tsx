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
import { SharedDataContext } from '../../components/contexts/SharedDataProvider';
import OurDonorPageFactory from '../../test/factories/strapi/OurDonorPageFactory';
import OurDonorsPage from './OurDonorsPage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('OurDonorsPage', () => {
  const mockLoaderData = {
    ourDonorsPageStrapiData: new OurDonorPageFactory().getMockData(),
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
          <OurDonorsPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our donors page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-donors-page-title')).toBeInTheDocument();
      });
    });

    test('should render the our donors page sub title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-donors-page-sub-title')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
