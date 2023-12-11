import { type MutableRefObject, useCallback, useRef } from 'react'

// eslint-disable-next-line
export function useDebounce (callback: (...args: any[]) => void, delay: number) {
  // eslint-disable-next-line
  const timer = useRef() as MutableRefObject<any>
  // eslint-disable-next-line
  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line
      callback(...args)
    }, delay)
  }, [callback, delay])
}
