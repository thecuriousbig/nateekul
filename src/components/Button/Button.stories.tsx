import { storiesOf } from '@storybook/react'
import Button from './Button'

storiesOf('Button', module).add('with text', () => {
  return <Button>button</Button>
})

storiesOf('Button', module).add('with emoji', () => {
  return (
    <Button>
      <span role="img" aria-label="emoji">
        😀 😎 👍 💯
      </span>
    </Button>
  )
})
