import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, describe, expect, test, vi } from 'vitest';
import Footer from './Footer';
import FooterFactory from '../../test/factories/strapi/FooterFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';

describe('Footer', () => {
  const setup = async () => {
    const mockData = new FooterFactory().getMockData();
    render(
      <SharedDataContext.Provider
        value={{
          footerContent: mockData,
        }}
      >
        <Footer />
      </SharedDataContext.Provider>
    );
  };

  describe('render elements', async () => {
    test('should render footer image after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('footer-image')).toBeInTheDocument();
      });
    });

    test('should render footer body after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('footer-body')).toBeInTheDocument();
      });
    });

    test('should render navigation links title after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('navigation-links-title')
        ).toBeInTheDocument();
      });
    });

    test('should render social media links title after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('social-media-links-title')
        ).toBeInTheDocument();
      });
    });

    test('should render contact information title after data is loaded', async () => {
      await setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('contact-information-title')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
