import { useState, useEffect } from 'react'

const PREFIX = 'react-code-editor-'

function useLocalStorage(key: string, initialValue: string | Function) {
  const prefixedKey = PREFIX + key
  const [storedValue, setStoredValue] = useState(() => {
    // try {
    //   const item = window.localStorage.getItem(key)
    //   return item ? JSON.parse(item) : initialValue
    // } catch (error) {
    //   console.log(error)
    //   return initialValue
    // }
    const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(prefixedKey, JSON.stringify(storedValue))
    } catch (error) {
      console.log(error)
    }
  }, [prefixedKey, storedValue])

  return [storedValue, setStoredValue]
}

export default useLocalStorage