import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import PageWrapper from './PageWrapper';
import NavigationBarFactory from '../../test/factories/strapi/NavigationBarFactory';
import FooterFactory from '../../test/factories/strapi/FooterFactory';
import { SharedDataContext } from '../../contexts/SharedDataProvider';

describe('PageWrapper', () => {
  beforeEach(() => {
    const navigationMockData = new NavigationBarFactory().getMockData();
    const footerMockData = new FooterFactory().getMockData();

    render(
      <SharedDataContext.Provider
        value={{
          navigationBarContent: navigationMockData,
          footerContent: footerMockData,
        }}
      >
        <PageWrapper>
          <h1>I am a child</h1>
        </PageWrapper>
      </SharedDataContext.Provider>
    );
  });

  describe('render components', async () => {
    test('should render render footer after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('footer')).toBeInTheDocument();
      });
    });

    test('should render render navigation bar after data is loaded', async () => {
      await waitFor(() => {
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
      });
    });

    test('should render the child component', () => {
      expect(screen.getByText('I am a child')).toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });
});
