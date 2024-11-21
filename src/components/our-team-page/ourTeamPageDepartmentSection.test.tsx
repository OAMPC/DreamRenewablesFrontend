import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import OurTeamPageFactory from '../../test/factories/strapi/OurTeamPageFactory';
import OurTeamPageDepartmentSection from './OurTeamPageDepartmentSection';

describe('OurTeamPageDepartmentSection', () => {
  const setup = async () => {
    const ouTeamPageFactory = new OurTeamPageFactory();
    const mockData = ouTeamPageFactory.getMockData();
    render(
      <MemoryRouter>
        <OurTeamPageDepartmentSection
          departmentSection={mockData.departmentSections[0]}
        />
      </MemoryRouter>
    );
  };

  beforeEach(async () => {
    await setup();
  });

  describe('render elements', async () => {
    test('should render the department section title after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getByTestId('department-section-title')
        ).toBeInTheDocument();
      });
    });

    test('should render the department section profile photos after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('department-section-profile-image').length
        ).toBe(5);
      });
    });

    test('should render the department section profile names after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('department-section-profile-name').length
        ).toBe(5);
      });
    });

    test('should render the department section profile descriptions after data is loaded', async () => {
      await waitFor(() => {
        expect(
          screen.getAllByTestId('department-section-profile-description').length
        ).toBe(5);
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
