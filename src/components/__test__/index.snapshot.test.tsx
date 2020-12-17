import React from 'react'
import renderer from 'react-test-renderer'

const Button = ({ text }) => <button>{text}</button>

it('should render correctly', () => {
  const tree = renderer.create(<Button text="click me" />)
  expect(tree).toMatchSnapshot()
})
