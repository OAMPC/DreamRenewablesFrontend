import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import AnnualReportCard from './AnnualReportCard';
import AnnualReportsFactory from '../../test/factories/strapi/AnnualReportsFactory';

const annualReportFactory = new AnnualReportsFactory();
const mockReportData = annualReportFactory.getMockResponse().data[0].attributes;

describe('AnnualReportCard', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <AnnualReportCard reportData={mockReportData} />
      </MemoryRouter>
    );
  };

  describe('Rendering and Content', () => {
    test('should render the card container', async () => {
      setup();
      await waitFor(() => {
        expect(screen.getByTestId('annual-report-card')).toBeInTheDocument();
      });
    });

    test('should render the report title', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`annual-report-card-title-${mockReportData.title}`)
        ).toHaveTextContent(mockReportData.title);
      });
    });

    test('should render the report date', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`annual-report-card-date-${mockReportData.title}`)
        ).toHaveTextContent(mockReportData.datePublished);
      });
    });

    test('should render the card image with the correct src', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`annual-report-card-image-${mockReportData.title}`)
        ).toHaveAttribute('src', mockReportData.cardImage.data.attributes.url);
      });
    });
  });

  describe('Linking and Navigation', () => {
    test('should link to the correct annual report URL', async () => {
      setup();
      const linkElement = screen.getByTestId(
        `annual-report-card-link-${mockReportData.title}`
      ) as HTMLAnchorElement;
      expect(linkElement).toHaveAttribute('href', mockReportData.link);
    });
  });
});
