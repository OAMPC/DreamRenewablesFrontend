import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  beforeEach(() => {
    render(<LandingPage />);
  });

  it('renders the page header', () => {
    expect(screen.getByText(/Hello World this is a Test!/i)).toBeTruthy();
  });
});
