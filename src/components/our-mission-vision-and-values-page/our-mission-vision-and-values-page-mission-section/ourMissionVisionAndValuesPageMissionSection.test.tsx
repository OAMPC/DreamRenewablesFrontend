import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurMissionVisionAndValuesPageMissionSection from './OurMissionVisionAndValuesPageMissionSection';
import OurMissionVisionAndValuesPageFactory from '../../../test/factories/strapi/OurMissionVisionAndValuesPageFactory';

describe('ourMissionVisionAndValuesPageMissionSection', () => {
  const setup = async () => {
    const ourMissionVisionAndValuesPageFactory =
      new OurMissionVisionAndValuesPageFactory();
    const mockData = ourMissionVisionAndValuesPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurMissionVisionAndValuesPageMissionSection
          ourMissionSection={mockData.ourMissionSection}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the our mission section title icon after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-mission-section-title-icon')
        ).toBeInTheDocument();
      });
    });

    test('should render the our mission section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-mission-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the our mission section description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-mission-section-description')
        ).toBeInTheDocument();
      });
    });

    test('should render the our mission section image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('our-mission-section-image')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
