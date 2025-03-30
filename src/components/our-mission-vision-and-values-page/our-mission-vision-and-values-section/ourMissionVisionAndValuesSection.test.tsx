import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurMissionVisionAndValuesPageFactory from '../../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';
import OurMissionVisionAndValuesPageSection from './OurMissionVisionAndValuesSection';

describe('OurMissionVisionAndValuesPageSection', () => {
  const setup = async () => {
    const mockData = new OurMissionVisionAndValuesPageFactory().getMockData();
    render(
      <OurMissionVisionAndValuesPageSection
        sectionData={mockData.sections[0]}
      />
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the omvvp title icon after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('omvvp-section-title-icon')
        ).toBeInTheDocument();
      });
    });

    test('should render the omvvp section title after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('omvvp-section-title')).toBeInTheDocument();
      });
    });

    test('should render the omvvp section description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('omvvp-section-description')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
