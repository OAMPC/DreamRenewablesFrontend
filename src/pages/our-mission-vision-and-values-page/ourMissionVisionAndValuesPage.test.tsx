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

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

describe('OurMissionVisionAndValuesPage', () => {
  const mockLoaderData = {
    navigationBarStrapiData: new navigationBarFactory().getMockData(),
    footerStrapiData: new FooterFactory().getMockData(),
    ourMissionVisionAndValuesStrapiData:
      new OurMissionVisionAndValuesPageFactory().getMockData(),
  };

  const setup = async () => {
    (useLoaderData as Mock).mockReturnValue(mockLoaderData);
    render(
      <MemoryRouter>
        <OurMissionVisionAndValuesPage />
      </MemoryRouter>
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
