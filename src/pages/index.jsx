import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "theme-ui"
import Layout from "~components/Layout"

const Page = () => {
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

  const seo = {
    title: "Paladin Letters",
    frontpage: true,
  }

  const getBody = () => page.headline.processed + page.body.processed

  return (
    <Layout seo={seo} image={image} alt={page.image.alt} title={page.title}>
      <Box
        css={`
          h2 {
            margin-bottom: 0;
          }
          p {
            margin-top: 0;
          }
        `}
        dangerouslySetInnerHTML={{ __html: getBody() }}
      />
    </Layout>
  )
}

export default Page
