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
import PageWrapper from './PageWrapper';
import NavigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';
import { SharedDataContext } from '../contexts/SharedDataProvider';

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('PageWrapper', () => {
  beforeEach(() => {
    const navigationMockData = new NavigationBarFactory().getMockData();
    const footerMockData = new FooterFactory().getMockData();
    (useWindowDimensions as Mock).mockReturnValue({ width: 1024 });

    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationMockData,
          footerContent: footerMockData,
        }}
      >
        <MemoryRouter>
          <PageWrapper>
            <h1>I am a child</h1>
          </PageWrapper>
        </MemoryRouter>
      </SharedDataContext.Provider>
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
