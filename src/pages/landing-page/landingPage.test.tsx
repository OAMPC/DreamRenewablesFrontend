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
import LandingPage from './LandingPage';
import navigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import useWindowDimensions from '../../hooks/windowDimensions';
import LandingPageFactory from '../../test/factories/strapi/LandingPageFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLoaderData: vi.fn(),
  };
});

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('LandingPage', () => {
  const mockLoaderData = {
    navigationBarStrapiData: new navigationBarFactory().getMockData(),
    footerStrapiData: new FooterFactory().getMockData(),
    landingPageStrapiData: new LandingPageFactory().getMockData(),
  };

  const setup = async (windowWidth: number = 1024) => {
    (useLoaderData as Mock).mockReturnValue(mockLoaderData);
    (useWindowDimensions as Mock).mockReturnValue({ windowWidth: windowWidth });

    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render desktop landing image card when screen width is large', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-image-card-desktop')
        ).toBeInTheDocument();
      });
    });

    test('should render video section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-video-section')).toBeInTheDocument();
      });
    });

    test('should render speciality section', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-speciality-section')
        ).toBeInTheDocument();
      });
    });

    test('should render quote section', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('landing-quote-section')).toBeInTheDocument();
      });
    });

    test('should render payment section', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('landing-payment-section')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
