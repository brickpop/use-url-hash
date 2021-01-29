# Use URL Hash

A simple React hook providing the current URL hash and triggering a re-render on every change.

## Get started

Install the package:

```bash
npm i use-url-hash
```

Import it in your component:

```tsx
import React from 'react'

const MyApp = () => {
  const hash = useUrlHash()

  return (
    <div>
      <h3>Use URL Hash</h3>
      <p>The current URL hash is <code>"{hash}"</code></p>
    </div>
  )
}
```

The value of `hash` will be already set at the very first render. 

## Example

Check out `example/index.tsx` for a working example.

```bash
cd example
npm install
npm start
```
