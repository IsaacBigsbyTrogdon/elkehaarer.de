/* eslint-disable prefer-destructuring */
const colors = {
  text: "#333",
  background: "#fff",
  primary: "tomato",
  secondary: "#f4ff5f",
}

// const fonts = {
//   body: "Georgia, serif",
//   heading: "system-ui, sans-serif",
// }

const breakpoints = [0, 600, 768, 1025, 1280, 1920]

//  Aliases
breakpoints.sm = breakpoints[1] // 600
breakpoints.md = breakpoints[2] // 960
breakpoints.lg = breakpoints[3] // 1280
breakpoints.xl = breakpoints[4] // 1920

const fontSizes = {
  body: "1rem",
  headline: "2.1rem",
}

// const breakpoints = {
//   values: {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920,
//   },
// }

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
// const space = [
//   "0",
//   "4px",
//   "8px",
//   "16px",
//   "32px",
//   "64px",
//   "128px",
//   "256px",
//   "512px",
// ]

space.units = {
  base: space[2],
  small: space[1],
  margin: space[3],
  large: space[4],
  border: {
    default: 12,
  },
  maxWidth: "960px",
}

const modalSizes = {
  sm: { w: 300 },
  md: { w: 600 },
  lg: { w: 800 },
}

export default {
  name: "Default",
  modalSizes,
  // fonts,
  breakpoints,
  fontSizes,
  colors,
  space,
}
