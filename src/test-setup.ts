import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual('@tanstack/react-query');
  return {
    ...actual,
    useQuery: vi.fn(),
  };
});

export const AXIOS_MOCK = new MockAdapter(axios);

beforeAll(() => {
  vi.stubGlobal('console', {
    ...console,
    error: vi.fn(),
  });
});

afterEach(() => {
  AXIOS_MOCK.reset();
  cleanup();
});

afterAll(() => {
  AXIOS_MOCK.restore();
});
