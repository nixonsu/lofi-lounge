import { usePlayer } from '../usePlayer'
import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'

describe('usePlayer', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => usePlayer())

    expect(result.current.volume).toBe(0.5)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.isLoading).toBe(false)
  })
})
