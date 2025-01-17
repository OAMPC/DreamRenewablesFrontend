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
import OurTeamPageFactory from '../../test/factories/strapi/OurTeamPageFactory';
import OurTeamPage from './OurTeamPage';
import { SharedDataContext } from '../../contexts/SharedDataProvider';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('OurTeamPage', () => {
  const mockLoaderData = {
    ourTeamPageStrapiData: new OurTeamPageFactory().getMockData(),
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
          <OurTeamPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our team page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-team-page-title')).toBeInTheDocument();
      });
    });

    test('should render the our team page sub title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('our-team-page-sub-title')
        ).toBeInTheDocument();
      });
    });

    test('should render each department section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('department-section').length).toBe(2);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
