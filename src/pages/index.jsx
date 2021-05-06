import React, { createRef, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ModalSlider from "~components/ModalSlider"
import styled, { theme } from "~theme"
import Tile from "~components/Tile"
import Image from "~components/Image"
import Layout from "~components/Layout"
import Modal from "~components/Modal"
import Slider from "~components/Slider"
import { TilesSmall, TilesMedium, TilesLarge } from "~layouts"
import { cleanString } from "~utils"

const Page = props => {
  const { page } = useStaticQuery(graphql`
    query homepageQuery {
      site {
        siteMetadata {
          title
        }
      }
      page: nodePage(drupal_internal__nid: { eq: 1 }) {
        title
        relationships {
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
                    gatsbyImageData(layout: CONSTRAINED, width: 800)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const items = page.relationships?.items || []

  // const [slideIndex, setSlideIndex] = React.useState(0)

  const [slidesStatus, setSlidesStatus] = React.useState()

  // const [modalStatus, setModalStatus] = React.useState(false)
  // const [modalContent, setModalContent] = React.useState(null)

  const getTiles = () => {
    return items.map((item, key) => {
      const { cropped, image, modal } = item.relationships

      const tile = {
        color: item.color.color,
        cropped,
        image,
        alt: item.image.alt,
      }
      return [
        <Tile
          index={key}
          key={item.id}
          data={tile}
          slidesStatus={slidesStatus}
          setSlidesStatus={setSlidesStatus}
          // setSlideIndex={setSlideIndex}
          // setModalStatus={setModalStatus}
        />,
        item.id,
      ]
    })
  }

  const { breakpoints } = theme

  const tiles = getTiles()

  const TilesWithLayout = () => {
    const mqLg = useMediaQuery(`(min-width:${breakpoints.lg}px)`)
    const mqMd = useMediaQuery(`(min-width:${breakpoints.md}px)`)

    if (mqLg) return <TilesLarge tiles={tiles} />
    if (mqMd) return <TilesMedium tiles={tiles} />

    return <TilesSmall tiles={tiles} />
  }

  const seo = {
    title: "Elke Haarer",
    frontpage: true,
  }

  return (
    <Layout seo={seo} frontpage>
      {page.body?.value && (
        <div dangerouslySetInnerHTML={{ __html: page.body.value }} />
      )}
      <Box className="tiles-wrapper">
        <TilesWithLayout />
      </Box>
    </Layout>
  )
}

export default Page
