import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurMissionVisionAndValuesPageFactory from '../../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurMissionVisionAndValuesPageValuesSection from './OurMissionVisionAndValuesPageValuesSection';

describe('ourMissionVisionAndValuesPageValuesSection', () => {
  const setup = async () => {
    const ourMissionVisionAndValuesPageFactory =
      new OurMissionVisionAndValuesPageFactory();
    const mockData = ourMissionVisionAndValuesPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurMissionVisionAndValuesPageValuesSection
          ourValuesSection={mockData.ourValuesSection}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our vision values section title icon after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-values-section-title-icon')
        ).toBeInTheDocument();
      });
    });

    test('should render the our vision values section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-values-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the our vision values section image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-values-section-image')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
