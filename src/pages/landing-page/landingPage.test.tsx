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
import footerFactory from '../../test/factories/strapi/footerFactory';
import navigationBarFactory from '../../test/factories/strapi/navigationBarFactory';
import useWindowDimensions from '../../hooks/windowDimensions';
import LandingPageFactory from '../../test/factories/strapi/LandingPageFactory';

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
    navigationBarStrapiData: navigationBarFactory().mockData.data.attributes,
    footerStrapiData: footerFactory().mockData.data.attributes,
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

    // test('should render mobile landing image card when screen width is small', async () => {
    //   await setup(500);
    //   await waitFor(() => {
    //     expect(
    //       screen.getByTestId('landing-image-card-mobile')
    //     ).toBeInTheDocument();
    //   });
    // });

    // test('should render video section', async () => {
    //   await setup();
    //   await waitFor(() => {
    //     expect(screen.getByTestId('landing-video-section')).toBeInTheDocument();
    //   });
    // });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
