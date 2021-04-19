import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Box } from "~components/base"
import styled, { theme, themeGet } from "~theme"

const { breakpoints, fontSizes, space } = theme

const Header = ({ siteTitle, css }) => {
  const headline = () => (
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
  )

  return (
    <Box className="header-wrapper" as="header">
      <Box className="header-inner">{headline()}</Box>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
