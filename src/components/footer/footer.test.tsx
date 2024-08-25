import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, Mock, test, vi } from 'vitest';
import useWindowDimensions from '../../hooks/windowDimensions';
import footerFactory from '../../test/factories/strapi/footerFactory';
import Footer from './Footer';

vi.mock('../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('Footer', () => {
  const setup = async (windowWidth: number = 1024) => {
    const { mockData } = footerFactory();
    (useWindowDimensions as Mock).mockReturnValue({ width: windowWidth });
    render(
      <MemoryRouter>
        <Footer content={mockData.data.attributes} />
      </MemoryRouter>
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

  describe('contextual styling', () => {
    test('should apply "active" to classes when width is less than or equal to 992', async () => {
      await setup(992);
      await waitFor(() => {
        const footerImageCol = screen.getByTestId('footer-image-col');
        expect(footerImageCol).toHaveClass('active');
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
