import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import ErrorTemplatePage from './ErrorTemplatePage';

describe('ErrorTemplatePage', () => {
  const setup = async () => {
    render(
      <ErrorTemplatePage errorMessage="ERROR 404: Sorry this page cannot be found" />
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('render elements', () => {
    test('should render the dr logo when on a errorTemplatePage', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('dr-logo')).toBeInTheDocument();
      });
    });

    test('should render the passed error message text when on a errorTemplatePage', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByText('ERROR 404: Sorry this page cannot be found')
        ).toBeInTheDocument();
      });
    });

    test('should render the dr link text when on a errorTemplatePage', async () => {
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
