import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PageWrapper from './PageWrapper';

describe('PageWrapper', () => {
  beforeEach(async () => {
    render(
      <PageWrapper>
        <span>Test Content</span>
      </PageWrapper>
    );
  });

  it('renders the NavigationBar', async () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders children correctly', async () => {
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
