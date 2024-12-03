import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import NavigationBar from './NavigationBar';
import NavigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';

describe('NavigationBar', () => {
  beforeEach(() => {
    const mockData = new NavigationBarFactory().getMockData();
    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: mockData,
        }}
      >
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </SharedDataContext.Provider>
    );
  });

  describe('render elements', async () => {
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
    vi.clearAllMocks();
  });
});
