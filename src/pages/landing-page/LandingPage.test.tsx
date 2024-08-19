import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from './LandingPage';
import PageWrapper from '../../components/page-wrapper/PageWrapper';

describe('LandingPage', () => {
  beforeEach(() => {
    render(
      <PageWrapper>
        <LandingPage />
      </PageWrapper>
    );
  });

  it('renders the page header', () => {
    expect(screen.getByText(/Hello World this is a Test!/i)).toBeTruthy();
  });
});
