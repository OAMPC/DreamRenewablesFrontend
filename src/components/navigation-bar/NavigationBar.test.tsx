import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from '@testing-library/react';
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

  describe('standard links', () => {
    it('renders all standard links', async () => {
      const standardLinks =
        mockNavigationBarResponse.data.data.attributes.standardLinks;
      standardLinks.forEach((link) => {
        expect(
          screen.getByTestId(`standard-link-${link.id}`)
        ).toBeInTheDocument();
      });
    });

    it('renders all dropdown links', async () => {
      const dropdownLinks =
        mockNavigationBarResponse.data.data.attributes.dropdownLinks;

      dropdownLinks.forEach((dropdownLink) => {
        const dropdownButton = screen.getByTestId(
          `dropdown-link-${dropdownLink.id}`
        );
        expect(dropdownButton).toBeInTheDocument();
      });
    });

    it('renders all dropdown links and their nested links', async () => {
      const dropdownLinks =
        mockNavigationBarResponse.data.data.attributes.dropdownLinks;

      for (const dropdownLink of dropdownLinks) {
        const dropdownButton = within(
          screen.getByTestId(`dropdown-link-${dropdownLink.id}`)
        ).getByRole('button');

        fireEvent.click(dropdownButton);

        await waitFor(() => {
          dropdownLink.nestedLinks.forEach((nestedLink) => {
            expect(
              screen.getByTestId(`nested-link-${nestedLink.id}`)
            ).toBeInTheDocument();
          });
        });
      }
    });
  });
});
