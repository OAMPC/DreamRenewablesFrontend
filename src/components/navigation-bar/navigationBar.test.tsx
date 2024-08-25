import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import navigationBarFactory from '../../test/factories/strapi/navigationBarFactory';
import NavigationBar from './NavigationBar';

describe('NavigationBar', () => {
  beforeEach(() => {
    const { mockData } = navigationBarFactory();
    render(
      <MemoryRouter>
        <NavigationBar content={mockData.data.attributes} />
      </MemoryRouter>
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
