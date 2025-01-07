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
import OurWorkPageFactory from '../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPage from './OurWorkPage';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('OurWorkPage', () => {
  const mockLoaderData = {
    ourWorkPageStrapiData: new OurWorkPageFactory().getMockData(),
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
          <OurWorkPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our work page title when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-work-page-title')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
