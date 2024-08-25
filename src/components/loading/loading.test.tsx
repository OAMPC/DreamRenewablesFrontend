import { render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import Loading from './Loading';

describe('Loading', () => {
  beforeEach(() => {
    render(<Loading />);
  });

  describe('render elements', async () => {
    test('should render loading spinner initially', () => {
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });
});
