import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import mockNavigationBarResponse from '../../test/mock-response/navigation-bar-response.json';

vi.mock('axios');

describe('NavigationBar', () => {
  beforeEach(async () => {
    vi.spyOn(axios, 'get').mockResolvedValue(mockNavigationBarResponse);
    render(
      <MemoryRouter>
        <NavigationBar />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.queryByRole('status', { hidden: true })
      ).not.toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('brand', () => {
    it('renders brand image correctly', async () => {
      expect(screen.getByTestId('brand-logo')).toBeInTheDocument();
    });

    it('navigates to the home page when the brand image is clicked', async () => {
      fireEvent.click(screen.getByTestId('brand-logo'));
      expect(window.location.pathname).toBe('/');
    });
  });
});
