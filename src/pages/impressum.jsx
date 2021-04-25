import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex, Text } from "theme-ui"

import Layout from "~components/Layout"

const Page = () => {
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
                gatsbyImageData(layout: CONSTRAINED, width: 1000)
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

  const seo = {
    title: "Impressum",
  }

  const body = page.body.processed

  const title = () => {
    return <Text as="h1">Impressum</Text>
  }

  return (
    <Layout
      seo={seo}
      image={image}
      alt={page.image.alt}
      title={title()}
      styles={`
        h1,
        h2 {
          text-transform: lowercase;
        }
      `}
    >
      <Box dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}

export default Page
