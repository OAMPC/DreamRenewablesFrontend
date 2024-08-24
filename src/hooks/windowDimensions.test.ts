import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import useWindowDimensions from './windowDimensions';

describe('useWindowDimensions', () => {
  beforeEach(() => {
    window.innerWidth = 1024;
    window.innerHeight = 768;
  });

  test('should return initial window dimensions', () => {
    const { result } = renderHook(() => useWindowDimensions());

    expect(result.current.width).toBe(1024);
    expect(result.current.height).toBe(768);
  });

  test('should update dimensions on window resize', () => {
    const { result } = renderHook(() => useWindowDimensions());

    act(() => {
      window.innerWidth = 1280;
      window.innerHeight = 720;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.width).toBe(1280);
    expect(result.current.height).toBe(720);
  });

  test('should clean up the resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useWindowDimensions());
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      expect.any(Function)
    );
  });
});
