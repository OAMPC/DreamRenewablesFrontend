import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import {
  describe,
  test,
  expect,
  beforeEach,
  afterEach,
  vi,
  Mock,
} from 'vitest';
import { useQuery } from '@tanstack/react-query';
import { renderWithProviders } from '../../test/helpers/helpers';
import AnnualReportsFactory from '../../test/factories/strapi/AnnualReportsFactory';
import AnnualReportsPage from './AnnualReportsPage';

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

describe('AnnualReportsPage', () => {
  const mockData = new AnnualReportsFactory().getMockResponse().data;

  const setup = async () => {
    (useQuery as Mock).mockReturnValue({
      data: { data: mockData },
      isLoading: false,
      isPending: false,
      error: null,
    });

    renderWithProviders(<AnnualReportsPage />);
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Render elements', () => {
    test('should render the annual reports grid', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getByTestId('annual-reports-grid')).toBeInTheDocument();
      });
    });

    test('should render the correct number of annual report cards', async () => {
      await setup();
      await waitFor(() => {
        expect(screen.getAllByTestId('annual-report-card')).toHaveLength(
          mockData.length
        );
      });
    });

    test('should render each annual report card with correct data', async () => {
      await setup();
      await waitFor(() => {
        mockData.forEach((report) => {
          const { title, datePublished, description, link } = report.attributes;

          expect(
            screen.getByTestId(`annual-report-card-title-${title}`)
          ).toHaveTextContent(title);

          expect(
            screen.getByTestId(`annual-report-card-description-${title}`)
          ).toHaveTextContent(description);

          expect(
            screen.getByTestId(`annual-report-card-date-${title}`)
          ).toHaveTextContent(datePublished);

          expect(
            screen.getByTestId(`annual-report-card-link-${title}`)
          ).toHaveAttribute('href', link);
        });
      });
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
