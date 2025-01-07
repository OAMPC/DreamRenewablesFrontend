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
import AboutUsPageFactory from '../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPage from './AboutUsPage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('AboutUsPage', () => {
  const mockLoaderData = {
    aboutUsPageStrapiData: new AboutUsPageFactory().getMockData(),
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
          <AboutUsPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the about us landing card when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-landing-card-desktop')
        ).toBeInTheDocument();
      });
    });

    test('should render the about us page sections when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getAllByTestId('about-us-page-section-title').length
        ).toBe(3);
      });
    });

    test('should render the about us page image button section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-image-buttons-section')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
