import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import { useLocation } from "@reach/router"
import Header from "./Header"
import Menu from "./Menu"
import Switcher from "./Switcher"
import { Box } from "~components/base"
import styled, { theme as myTheme, themeGet } from "~theme"
import SEO from "./Seo"

import "normalize.css"
import "./layout.css"
import "~theme/styles.sass"

const { breakpoints, colors, space, fontSizes } = myTheme

const Layout = ({ children, frontpage, seo }) => {
  const location = useLocation()
  const { theme, switchTheme } = useContext(ThemeContext)
  const curTheme = location.pathname === "/" ? "theme-default" : "theme-yellow"
  switchTheme(curTheme)

  const [init, setInit] = useState(null)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO seo={seo} />
      <Box
        className="body-wrapper"
        css={`          font-size ${fontSizes.body};

          @media (min-width: ${breakpoints.lg}px) {
            padding-left: 50px;
          }
        `}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <Menu frontpage={frontpage} />

        <Box
          p={[3, 4]}
          pt={[0, 0]}
          className="main-content"
          css={`
            position: relative;
            top: 70px;

            @media (min-width: ${breakpoints.md}px) {
              top: 100px;
            }

            @media (min-width: ${breakpoints.lg}px) {
              top: 120px;
            }
          `}
        >
          <Box
            as="main"
            css={`
              height: 100%;
              padding-bottom: 50px;
            `}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
