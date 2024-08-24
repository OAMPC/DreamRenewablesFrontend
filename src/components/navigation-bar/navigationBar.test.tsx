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
import { getNavigationBarStrapiData } from '../../api/strapiApi';
import navigationBarFactory from '../../test/builders/strapi/navigationBarFactory';
import NavigationBar from './NavigationBar';

vi.mock('../../api/strapiApi', () => ({
  getNavigationBarStrapiData: vi.fn(),
}));

describe('NavigationBar', () => {
  beforeEach(() => {
    const { mockData } = navigationBarFactory();
    (getNavigationBarStrapiData as Mock).mockResolvedValue(
      mockData.data.attributes
    );
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );
  });

  describe('render elements', async () => {
    test('should render loading spinner initially', () => {
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });

    test('should render brand logo after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('brand-logo')).toBeInTheDocument();
      });
    });

    test('should render dropdown link titles after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getAllByTestId('dropdown-link-title').length).toEqual(2);
      });
    });

    test('should render standard links after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getAllByTestId('dropdown-link-title').length).toEqual(2);
      });
    });

    test('should render button after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('navigation-button')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    (getNavigationBarStrapiData as Mock).mockClear();
  });
});
