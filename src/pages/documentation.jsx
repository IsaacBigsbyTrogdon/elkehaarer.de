import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import { useTheme } from "@material-ui/core/styles"
import Layout from "~components/Layout"
import FilesList from "~components/FilesList"
import { theme } from "~theme"

const { breakpoints } = theme

const Page = () => {
  const { page } = useStaticQuery(graphql`
    query documentationPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 3 }) {
        title
        body {
          value
        }
        relationships {
          files: field_files {
            name
            id
            relationships {
              file: field_media_document {
                localFile {
                  url: publicURL
                  size: prettySize
                  extension
                }
              }
            }
          }
        }
      }
    }
  `)

  const getFiles = () => {
    return (
      page.relationships?.files &&
      page.relationships?.files.map(item => {
        const file = item.relationships.file.localFile
        return {
          id: item.id,
          name: item.name,
          to: file.url,
          size: file.size,
          extension: file.extension,
        }
      })
    )
  }

  const seo = {
    title: page.title,
  }

  return (
    <Layout seo={seo}>
      <Box
        width={3}
        css={`
          width: 75%;

          li + li {
            padding-top: 10px;
          }

          @media (min-width: ${breakpoints.sm}px) {
            width: inherit;
          }
        `}
      >
        <FilesList files={getFiles() || []} />
      </Box>
    </Layout>
  )
}

export default Page
