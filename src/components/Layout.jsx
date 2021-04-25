import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import { useLocation } from "@reach/router"
import Header from "~components/Header"
import Menu from "./Menu"
import Switcher from "./Switcher"
import { Box, Flex } from "~components/base"
import styled, { theme as myTheme, themeGet } from "~theme"
import SEO from "./Seo"
import Image from "~components/Image"

import "~theme/init.css"
import "normalize.css"
import "./layout.css"
import "~theme/styles.sass"

const { breakpoints, colors, space, fontSizes } = myTheme

const Layout = ({ alt, children, frontpage, image, seo, title }) => {
  return (
    <>
      <SEO seo={seo} />
      <Box
        as="main"
        css={`
          min-height: 100%;
          height: 100%;
          font-size ${fontSizes.body};
          display: flex;
          flex-direction: column;
          
          > * {
            height: 50%;
            flex: 1;
          }

          // height: 100%;
          @media (min-width: ${breakpoints.lg}px) {
          }
        `}
      >
        <Box
          css={`
            overflow: scroll;
          `}
        >
          <Box
            as="section"
            css={`
              padding: ${space[3]}px;
            `}
          >
            <header>
              <Link
                to="/"
                css={`
                  display: block;
                `}
              >
                <h1>{title}</h1>
              </Link>
            </header>
            {children}
          </Box>
        </Box>
        <Box
          as="figure"
          css={`
            overflow: hidden;
          `}
        >
          <Image data={image} alt={alt} objectFit="cover" />
        </Box>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
