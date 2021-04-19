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
    query homepageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 5 }) {
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
          items: field_items {
            id
            color: field_color {
              color
            }
            body: field_body {
              value
            }
            image: field_image_cropped {
              alt
            }
            relationships {
              cropped: field_image_cropped {
                id
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { image } = page.relationships

  const { breakpoints } = theme
  console.log("🚀 ~ file: index.jsx ~ line 68 ~ breakpoints", breakpoints)

  const seo = {
    title: "Paladin Letters",
    front: true,
  }

  return (
    <Layout seo={seo} frontpage menu={false}>
      <Box as="section" p={[3]} pt={[3]} bt={[0]}>
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
            `}
          >
            <h1>{page.title}</h1>
          </Link>
          <Box
            dangerouslySetInnerHTML={{ __html: page.headline.processed }}
            css={`
              *:first-child {
                padding-bottom: 5px;
              }
            `}
          />
          <Box
            dangerouslySetInnerHTML={{ __html: page.body.processed }}
            css={`
              p {
                margin-bottom: 0;
              }
              p + p: padding-top: 5px;
            `}
          />
        </Box>
      </Box>
      <Box
        as="section"
        css={`
          img {
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
