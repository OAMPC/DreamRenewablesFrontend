import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

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
