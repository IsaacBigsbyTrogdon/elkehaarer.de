import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { Link } from "gatsby"
import { Box, Flex } from "~components/base"
import styled, { theme as myTheme } from "~theme"
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
      <Flex
        as="main"
        css={`
          min-height: 100%;
          height: 100%;
          font-size ${fontSizes.body};
          flex-direction: column;
          
          > * {
            flex: 1;
            height: 50%;
            width: 100%;
          }
          
          @media (min-aspect-ratio: 1/1) {
            flex-direction: row;

            > * {
              height: 100%;
              width: 50%;
            }
          }
        `}
      >
        <Box
          css={`
            overflow: auto;
          `}
        >
          <Box
            as="section"
            css={`
              padding: ${space[3]}px;

              @media (min-width: ${breakpoints.md}px) {
                padding: ${space[4]}px;
              }
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

            > * {
              width: 100%;
              height: 100%;
            }
          `}
        >
          <Image data={image} alt={alt} objectFit="cover" />
        </Box>
      </Flex>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
