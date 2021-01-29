import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useUrlHash } from '../.'

const App = () => {
  const hash = useUrlHash()

  return (
    <div>
      <h3>Use Hash hook</h3>
      <p>The current URL hash is <code>"{hash}"</code></p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
