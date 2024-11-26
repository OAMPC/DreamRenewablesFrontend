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
import OurMissionVisionAndValuesPageFactory from '../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurMissionVisionAndValuesPage from './OurMissionVisionAndValuesPage';
import { SharedDataContext } from '../../components/contexts/SharedDataProvider';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('OurMissionVisionAndValuesPage', () => {
  const mockLoaderData = {
    ourMissionVisionAndValuesStrapiData:
      new OurMissionVisionAndValuesPageFactory().getMockData(),
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
          <OurMissionVisionAndValuesPage />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the our mission and values page mission section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-mission-section')).toBeInTheDocument();
      });
    });

    test('should render the our mission and values page vision section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-vision-section')).toBeInTheDocument();
      });
    });

    test('should render the our mission and values page values section when data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('our-values-section')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
