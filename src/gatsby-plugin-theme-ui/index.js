const colors = {
  text: "#333",
  background: "#fff",
  primary: "tomato",
  secondary: "#f4ff5f",
}

const fonts = {
  body: "Georgia, serif",
  heading: "system-ui, sans-serif",
}

const breakpoints = [0, 600, 960, 1280, 1920]
// breakpoints: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },

//  Aliases
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two to ensure alignment across the entire project
 */
const space = [
  "0",
  "4px",
  "8px",
  "16px",
  "32px",
  "64px",
  "128px",
  "256px",
  "512px",
]

space.units = {
  base: space[2],
  small: space[1],
  margin: space[3],
  large: space[4],
  border: {
    default: 12,
  },
  maxWidth: "1276px",
}

export default {
  name: "Default",
  fonts,
  breakpoints,
  colors,
  space,
}
