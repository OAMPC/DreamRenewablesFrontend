import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import GetInvolvedPageFactory from '../../../test/factories/strapi/GetInvolvedPageFactory';
import GetInvolvedPageSection from './GetInvolvedPageSection';

describe('GetInvolvedPageSection', () => {
  const setup = async () => {
    const getInvolvedPageFactory = new GetInvolvedPageFactory();
    const mockData = getInvolvedPageFactory.getMockData();
    render(
      <MemoryRouter>
        <GetInvolvedPageSection
          sectionData={mockData.sections[0]}
          rowIndex={0}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render get involved page section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('get-involved-page-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render get involved page section description after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('get-involved-page-section-description')
        ).toBeInTheDocument();
      });
    });

    test('should render get involved page section link after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('get-involved-page-section-link')
        ).toBeInTheDocument();
      });
    });

    test('should render get involved page section image after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('get-involved-page-section-image')
        ).toBeInTheDocument();
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
