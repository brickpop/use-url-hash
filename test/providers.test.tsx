import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useUrlHash } from '../.'

describe('it', () => {
  it('renders on SSR requests without crashing', () => {
    const Component = () => {
      const hash = useUrlHash()

      return <div>The hash is {hash || 'empty'}</div>
    }

    const div = document.createElement('div')
    ReactDOM.render(<Component />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
