import React from 'react'
import TestRenderer from 'react-test-renderer'

const Home = () => <h1>Welcome to Nateekul Website</h1>

describe('Index', () => {
  it('should render without throwing an error', () => {
    const { root } = TestRenderer.create(<Home />)
    const element = root.findByType('h1')
    expect(element.props.children).toEqual('Welcome to Nateekul Website')
  })
})
