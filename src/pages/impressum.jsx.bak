import React, { createRef, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Header from "~components/Header"
import styled, { theme } from "~theme"
import Layout from "~components/Layout"
import { TilesSmall, TilesMedium, TilesLarge } from "~layouts"
import { cleanString } from "~utils"
import Image from "~components/Image"

const Page = props => {
  const { page } = useStaticQuery(graphql`
    query impressumPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 6 }) {
        title
        image: field_image {
          alt
        }
        headline: field_headline {
          processed
        }
        body {
          processed
        }
        relationships {
          image: field_image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 800)
              }
            }
          }
        }
      }
    }
  `)

  const { image } = page.relationships

  const { breakpoints } = theme

  const seo = {
    title: "Impressum | Paladin Letters",
  }

  return (
    <Layout seo={seo} frontpage menu={false}>
      <Box as="section" p={[3, 4]} pt={[3, 3]} mt={[0, "5px"]} bt={[0]}>
        <Box
          css={`
            > * {
              padding-bottom: 5px;
            }
          `}
        >
          <Link
            to="/"
            css={`
              display: block;
              h1 {
                font-family: "Sen", sans-serif;
                font-size: 1.62671rem;
                text-transform: lowercase;
                padding-bottom: 15px;
              }
            `}
          >
            <h1>{page.headline.processed.replace(/(<([^>]+)>)/gi, "")}</h1>
          </Link>
          <Box
            dangerouslySetInnerHTML={{ __html: page.body.processed }}
            css={`
              max-width: 500px;

              p {
                margin-bottom: 10px;
              }
            `}
          />
        </Box>
      </Box>
      <Box
        as="section"
        css={`
          display: flex;
          img,
          picture {
            display: block;
          }

          > * {
            max-height: 100%;
            height: 100%;
          }
          .gatsby-image-wrapper {
            @media (max-width: ${breakpoints.md}px) {
            }

            @media (min-width: ${breakpoints.lg}px) {
            }
          }
        `}
      >
        <Image
          data={image}
          alt={page.image.alt}
          objectFit="cover"
          objectPosition="50% 50%"
        />
      </Box>
    </Layout>
  )
}

export default Page
