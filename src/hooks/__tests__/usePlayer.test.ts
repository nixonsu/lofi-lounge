import {
  DEFAULT_LOADING,
  DEFAULT_PLAYING,
  DEFAULT_VOLUME,
  usePlayer,
} from '../usePlayer'
import { renderHook, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { describe, expect, test } from 'vitest'

describe('usePlayer', () => {
  test('should initialize with default values', () => {
    // Given
    const { result } = renderHook(() => usePlayer())

    // When, Then
    expect(result.current.volume).toBe(DEFAULT_VOLUME)
    expect(result.current.isPlaying).toBe(DEFAULT_PLAYING)
    expect(result.current.isLoading).toBe(DEFAULT_LOADING)
  })

  test('when togglPlay, should toggle playing state', async () => {
    // Given
    const { result } = renderHook(() => usePlayer())

    // When
    act(() => {
      result.current.togglePlay()
    })

    // Then
    await waitFor(() => {
      expect(result.current.isPlaying).toBe(!DEFAULT_PLAYING)
    })
  })
})
