import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import LandingPageVideoSection from './LandingPageVideoSection';
import LandingPageFactory from '../../../test/factories/strapi/LandingPageFactory';

vi.mock('../../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('landingPageVideoSection', () => {
  const setup = async () => {
    const landingPageFactory = new LandingPageFactory();
    const mockData = landingPageFactory.getMockData();
    render(
      <MemoryRouter>
        <LandingPageVideoSection videoSection={mockData.videoSection} />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render landing image video section after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('landing-video-section')).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
