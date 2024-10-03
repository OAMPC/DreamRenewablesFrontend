import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import landingPageFactory from '../../../test/factories/strapi/landingPageFactory';
import LandingPageVideoSection from './LandingPageVideoSection';

vi.mock('../../../hooks/windowDimensions', () => ({
  default: vi.fn(),
}));

describe('landingPageVideoSection', () => {
  const setup = async () => {
    const { mockData } = landingPageFactory();
    render(
      <MemoryRouter>
        <LandingPageVideoSection
          videoSection={mockData.data.attributes.videoSection}
        />
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
