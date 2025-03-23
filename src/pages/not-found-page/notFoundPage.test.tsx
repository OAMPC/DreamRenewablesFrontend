import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  const setup = async () => {
    render(<NotFoundPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the dr logo when on the 404 page', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('dr-logo')).toBeInTheDocument();
      });
    });

    test('should render the dr 404 text when on the 404 page', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByText('404 Sorry this page cannot be found')
        ).toBeInTheDocument();
      });
    });

    test('should render the dr link text when on the 404 page', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByText('Go back home')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
