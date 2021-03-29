import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import { useTheme } from "@material-ui/core/styles"
import Layout from "~components/Layout"
import SEO from "../components/seo"
import FilesList from "~components/FilesList"

const Page = () => {
  const { page } = useStaticQuery(graphql`
    query contactPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 2 }) {
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

  const theme = useTheme()
  let { breakpoints } = theme
  breakpoints = breakpoints.values

  return (
    <Layout>
      <SEO title="Contact / Vita" />
      <FilesList files={getFiles() || []} />
    </Layout>
  )
}

export default Page
