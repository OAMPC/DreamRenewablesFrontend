import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurMissionVisionAndValuesPageFactory from '../../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurMissionVisionAndValuesPageVisionSection from './OurMissionVisionAndValuesPageVisionSection';

describe('ourMissionVisionAndValuesPageVisionSection', () => {
  const setup = async () => {
    const ourMissionVisionAndValuesPageFactory =
      new OurMissionVisionAndValuesPageFactory();
    const mockData = ourMissionVisionAndValuesPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurMissionVisionAndValuesPageVisionSection
          ourVisionSection={mockData.ourMissionSection}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our vision section title icon after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-vision-section-title-icon')
        ).toBeInTheDocument();
      });
    });

    test('should render the our vision section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-vision-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the our vision section description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-vision-section-description')
        ).toBeInTheDocument();
      });
    });

    test('should render the our vision section image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-vision-section-image')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
