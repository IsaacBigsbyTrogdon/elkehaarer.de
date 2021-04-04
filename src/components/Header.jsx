import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Box } from "~components/base"
import styled, { theme, themeGet } from "~theme"

const { breakpoints, fontSizes, space } = theme

const Header = ({ siteTitle }) => {
  const headline = () => (
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
  )

  return (
    <Box
      className="header-wrapper"
      as="header"
      css={`
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 999;
      `}
    >
      <Box
        className="header-inner"
        pl={[3, 4, 4]}
        pt={[2, 3, 4]}
        css={`
          margin-left: -5px;
        `}
      >
        {headline()}
      </Box>
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
