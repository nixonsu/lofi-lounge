import useTimer from '@root/hooks/useTimer'
import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

describe('useTimer', () => {
  test('should return display time correctly', () => {
    // Given
    const { result } = renderHook(() => useTimer(2))

    // When
    const actual = result.current.getDisplayTime()

    // When, Then
    expect(actual.minutesDisplay).toBe('00')
    expect(actual.secondsDisplay).toBe('02')
  })

  test('when timer played, should be running', async () => {
    // Given
    const { result } = renderHook(() => useTimer(2))

    // When
    act(() => {
      result.current.play()
    })

    // Then
    await waitFor(() => {
      expect(result.current.isRunning).toBe(true)
    })
  })

  test('when timer paused, should no longer run', async () => {
    // Given
    const { result } = renderHook(() => useTimer(2))

    // When
    act(() => {
      result.current.play()
      result.current.pause()
    })

    // Then
    await waitFor(() => {
      expect(result.current.isRunning).toBe(false)
    })
  })

  test('when timer runs out, should complete and no longer runs', async () => {
    // Given
    vi.useFakeTimers()
    const { result } = renderHook(() => useTimer(2))

    // When
    act(() => {
      result.current.play()
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })

    // Then
    expect(result.current.isDone).toBe(true)
    expect(result.current.isRunning).toBe(false)
    expect(result.current.seconds).toBe(0)
    vi.useRealTimers()
  })

  test('when timer is reset, should stop running and seconds are back to initial', async () => {
    // Given
    const initialSeconds = 5
    const { result } = renderHook(() => useTimer(initialSeconds))

    // When
    act(() => {
      result.current.play()
      result.current.reset()
    })

    // Then
    await waitFor(() => {
      expect(result.current.isRunning).toBe(false)
      expect(result.current.seconds).toBe(initialSeconds)
    })
  })
})
