import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurWorkPageFactory from '../../../../test/factories/strapi/OurWorkPageFactory';
import OurWorkPageLandingCardDesktop from './OurWorkPageLandingCardDesktop';

describe('OurWorkPageLandingCardDesktop', () => {
  const OUR_WORK_PAGE_FACTORY = new OurWorkPageFactory();
  const MOCK_DATA = OUR_WORK_PAGE_FACTORY.getMockData();
  const setup = async () => {
    render(
      <MemoryRouter>
        <OurWorkPageLandingCardDesktop landingImage={MOCK_DATA.landingImage} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our work page desktop title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-landing-title-desktop')
        ).toBeInTheDocument();
      });
    });

    test('should render the our work page desktop image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-work-landing-image-desktop')
        ).toHaveStyle(
          `background-image: url(${MOCK_DATA.landingImage.image.data.attributes.url})`
        );
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
