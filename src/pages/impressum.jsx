import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import { useTheme } from "@material-ui/core/styles"
import Layout from "~components/Layout"
import FilesList from "~components/FilesList"

const Page = () => {
  const { page } = useStaticQuery(graphql`
    query impressumPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 4 }) {
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
      {page.body?.value && (
        <div dangerouslySetInnerHTML={{ __html: page.body.value }} />
      )}
      <FilesList files={getFiles() || []} />
    </Layout>
  )
}

export default Page
