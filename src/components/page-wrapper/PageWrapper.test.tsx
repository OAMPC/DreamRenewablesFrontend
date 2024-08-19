import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import PageWrapper from './PageWrapper';

describe('PageWrapper', () => {
  beforeEach(() => {
    render(
      <PageWrapper>
        <span>Test Content</span>
      </PageWrapper>
    );
  });

  it('renders children correctly', () => {
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
