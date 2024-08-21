import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import PageWrapper from './PageWrapper';
import mockNavigationBarResponse from '../../test/mock-response/navigation-bar-response.json';
import axios from 'axios';

vi.mock('axios');

describe('PageWrapper', () => {
  beforeEach(async () => {
    vi.spyOn(axios, 'get').mockResolvedValue(mockNavigationBarResponse);
    render(
      <PageWrapper>
        <span>Test Content</span>
      </PageWrapper>
    );

    await waitFor(() => {
      expect(
        screen.queryByRole('status', { hidden: true })
      ).not.toBeInTheDocument();
    });
  });

  it('renders the NavigationBar', async () => {
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders children correctly', async () => {
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
