import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import FundraisingEventsFactory from '../../test/factories/strapi/FundraisingEventsFactory';
import FundraisingEventCard from './FundraisingEventCard';

const fundraisingEventsFactory = new FundraisingEventsFactory();
const mockEventData =
  fundraisingEventsFactory.getMockResponse().data[0].attributes;

describe('FundraisingEventCard', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <FundraisingEventCard eventData={mockEventData} />
      </MemoryRouter>
    );
  };

  describe('Rendering and Content', () => {
    test('should render the event card container', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId('fundraising-event-card')
        ).toBeInTheDocument();
      });
    });

    test('should render the event title', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`event-card-title-${mockEventData.url}`)
        ).toHaveTextContent(mockEventData.eventTitle);
      });
    });

    test('should render the event date', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`event-card-date-${mockEventData.url}`)
        ).toHaveTextContent(mockEventData.eventDate);
      });
    });

    test('should render the contact email', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`event-card-contact-${mockEventData.url}`)
        ).toHaveTextContent(mockEventData.contactEmail);
      });
    });

    test('should render the landing image with correct src', async () => {
      setup();
      await waitFor(() => {
        expect(
          screen.getByTestId(`event-card-image-${mockEventData.url}`)
        ).toHaveAttribute(
          'src',
          mockEventData.landingImage.data.attributes.url
        );
      });
    });
  });

  describe('Linking and Navigation', () => {
    test('should link to the correct fundraising event URL', async () => {
      setup();
      const linkElement = screen.getByTestId(
        'event-card-link'
      ) as HTMLAnchorElement;
      expect(linkElement).toHaveAttribute(
        'href',
        `/fundraising-event/${mockEventData.url}`
      );
    });
  });
});
