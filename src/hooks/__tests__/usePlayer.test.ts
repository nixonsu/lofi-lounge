import { usePlayer } from '../usePlayer'
import { renderHook } from '@testing-library/react-hooks'
import { describe, expect, it } from 'vitest'

describe('usePlayer', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => usePlayer())

    expect(result.current.volume).toBe(0.5)
    expect(result.current.isPlaying).toBe(false)
    expect(result.current.isLoading).toBe(false)
  })
})
