import React, { useContext, useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import { useLocation } from "@reach/router"
import Header from "~components/Header"
import Menu from "./Menu"
import Switcher from "./Switcher"
import { Box, Flex } from "~components/base"
import styled, { theme as myTheme, themeGet } from "~theme"
import SEO from "./Seo"

import "~theme/init.css"
import "normalize.css"
import "./layout.css"
import "~theme/styles.sass"

const { breakpoints, colors, space, fontSizes } = myTheme

const Layout = ({ children, menu, seo, modalStatus }) => {
  const location = useLocation()
  const frontpage = location.pathname === "/"
  console.log("🚀 ~ file: Layout.jsx ~ line 24 ~ Layout ~ frontpage", frontpage)
  const { theme, switchTheme } = useContext(ThemeContext)
  const curTheme = "theme-default"

  if (typeof document !== "undefined") {
    switchTheme(curTheme)
  }

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
        as="main"
        className={clsx({ "content-wrapper": true, frontpage })}
        css={`font-size ${fontSizes.body};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          height: 100%;
          min-height: 100%;

          &.frontpage {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            overflow: hidden;

            > * {

              height: 50%;
            }

            @media (min-width: ${breakpoints.lg}px) {
              > * {
                height: 100%;
              }
            }
          }

          > * {
            flex: 1;

          }

          @media (min-width: ${breakpoints.lg}px) {
            flex-direction: row;
            
            > * {
              height: 100%;
            }
          }
        `}
      >
        {children}
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
