import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import AboutUsPageFactory from '../../../test/factories/strapi/AboutUsPageFactory';
import AboutUsPageImageButton from './AboutUsPageImageButton';

describe('AboutUsPageImageButton', () => {
  const ABOUT_US_PAGE_FACTORY = new AboutUsPageFactory();
  const MOCK_DATA = ABOUT_US_PAGE_FACTORY.getMockData();
  const setup = async () => {
    render(
      <MemoryRouter>
        <AboutUsPageImageButton
          imageButtonData={MOCK_DATA.imageButtonSection.imageButtons[0]}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render about us page image button text after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-image-button-text')
        ).toBeInTheDocument();
      });
    });

    test('should render about us page image button subText after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('about-us-page-image-button-subtext')
        ).toBeInTheDocument();
      });
    });

    test('should render the about us page desktop image after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('about-us-page-image-button')).toHaveStyle(
          `background-image: url(${MOCK_DATA.imageButtonSection.imageButtons[0].image.data.attributes.url})`
        );
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
