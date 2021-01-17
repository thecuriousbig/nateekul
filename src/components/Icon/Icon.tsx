import { LogoIcon, Slogan01Icon, Slogan02Icon, Slogan03Icon } from '@public/static/icons'

const iconList = {
  LogoIcon,
  Slogan01Icon,
  Slogan02Icon,
  Slogan03Icon
}

const fromEntries = (arr) =>
  arr.reduce((acc, curr) => {
    acc[curr[0]] = curr[1]
    return acc
  }, {})

Object.fromEntries = Object.fromEntries || fromEntries

const Icon = Object.fromEntries(
  Object.entries(iconList).map(([key, Component]) => [
    key,
    ({ width, height, ...props }) => <Component width={width} height={height} {...props} />
  ])
)

export default Icon
