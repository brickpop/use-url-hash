import { useState, useEffect } from 'react'

function useWindowEvent(event: string, callback: EventListener) {
  useEffect(() => {
    // Skip on SSR
    if (typeof window === 'undefined') return () => {}

    window.addEventListener(event, callback)

    // Unsubscribe on disposal
    return () => window.removeEventListener(event, callback)
  }, [event, callback])
}

export function useUrlHash(): string {
  const [urlHash, setUrlHash] = useState(
    typeof window != 'undefined' ? window.location.hash.substr(1) : ''
  )

  const checkHashValue = () => {
    if (urlHash === window.location.hash.substring(1)) return

    setUrlHash(window.location.hash.substring(1))
  }

  useEffect(() => {
    checkHashValue()
  }, [typeof window != 'undefined' && window?.location.hash])

  useWindowEvent('hashchange', checkHashValue)
  useWindowEvent('navigate', checkHashValue)
  useWindowEvent('navigatesuccess', checkHashValue)
  useWindowEvent('pageshow', checkHashValue)

  return urlHash || ''
}
