import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  Mock,
  test,
  vi,
} from 'vitest';
import useWindowDimensions from '../../hooks/windowDimensions';
import footerFactory from '../../test/factories/strapi/footerFactory';
import navigationBarFactory from '../../test/factories/strapi/navigationBarFactory';
import PageWrapper from './PageWrapper';

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('PageWrapper', () => {
  beforeEach(() => {
    const { mockData: navigationMockData } = navigationBarFactory();
    const { mockData: footerMockData } = footerFactory();
    (useWindowDimensions as Mock).mockReturnValue({ width: 1024 });

    render(
      <MemoryRouter>
        <PageWrapper
          navigationBarStrapiData={navigationMockData.data.attributes}
          footerStrapiData={footerMockData.data.attributes}
        >
          <h1>I am a child</h1>
        </PageWrapper>
      </MemoryRouter>
    );
  });

  describe('render components', async () => {
    test('should render render footer after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('footer')).toBeInTheDocument();
      });
    });

    test('should render render navigation bar after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
      });
    });

    test('should render the child component', () => {
      expect(screen.getByText('I am a child')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
