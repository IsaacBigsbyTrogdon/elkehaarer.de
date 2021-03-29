import React, { createRef, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import Tile from "~components/Tile"
import Image from "~components/Image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Modal from "~components/Modal"
import Slider from "~components/Slider"

const Page = () => {
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
            image: field_image {
              alt
            }
            relationships {
              image: field_image {
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, width: 800)
                  }
                }
              }
              modal: field_image {
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED, width: 800)
                  }
                }
              }
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

  const [slideIndex, setSlideIndex] = React.useState(0)
  const [modalStatus, setModalStatus] = React.useState(false)
  const [modalContent, setModalContent] = React.useState(null)

  const getTileData = () => {
    return items.map((item, key) => {
      const { cropped, image, modal } = item.relationships

      const tile = {
        color: item.color.color,
        cropped,
        image,
        alt: item.image.alt,
      }

      return (
        <Tile
          index={key}
          key={item.id}
          data={tile}
          setSlideIndex={setSlideIndex}
          setModalStatus={setModalStatus}
        />
      )
    })
  }

  const theme = useTheme()
  let { breakpoints } = theme
  breakpoints = breakpoints.values

  const tiles = getTileData()

  const TilesLarge = () => {
    return (
      <Flex className="tile-items">
        <Flex
          className="tile-items__part"
          sx={{ flexWrap: "wrap" }}
          css={`
            width: 55%;
          `}
          pr={[3]}
        >
          <Box
            className="tile-items__part-item"
            css={`
              width: 55%;
            `}
            pr={[3]}
          >
            {tiles[0]}
            <Box
              css={`
                width: 55%;
                margin-top: 70px;
                float: right;
              `}
            >
              {tiles[3]}
            </Box>
          </Box>
          <Box
            className="tile-items__part-item"
            css={`
              width: 45%;
            `}
          >
            {tiles[1]}
          </Box>
        </Flex>
        <Box
          css={`
            width: 45%;
          `}
        >
          {tiles[2]}
        </Box>
      </Flex>
    )
  }

  const TilesSmall = () => {
    return tiles.map((tile, key) => {
      return <Box key={items[key].id}>{tile}</Box>
    })
  }

  const getTiles = () => {
    return (
      <>
        {useMediaQuery("(max-width:600px)") && <TilesSmall />}
        {useMediaQuery("(min-width:600px)") && <TilesLarge />}
      </>
    )
  }

  const ModalSlider = () => {
    return (
      <Slider
        // ref={customSlider}
        current={slideIndex}
        settings={{
          // lazy: true,
          dots: true,
          infinite: true,
          focusOnSelect: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          initialSlide: slideIndex,
        }}
      >
        {items.map(item => {
          const max = "700px"
          const sizes = { sm: "300px", md: "500px", lg: "700px" }
          return (
            <Box
              key={item.id}
              className="slide-wrapper"
              css={`
                .gatsby-image-wrapper {
                  margin: auto;
                  max-width: ${sizes.sm};
                  max-height: ${sizes.sm};
                  width: ${sizes.sm};
                  height: ${sizes.sm};
                }

                img {
                  margin: auto;
                  display: block;
                  width: auto;
                  height: auto;
                }

                @media (min-width: ${breakpoints.md}px) {
                  .gatsby-image-wrapper {
                    max-width: ${max};
                    width: ${max};
                    max-height: ${max};
                    height: ${max};
                  }
                  img {
                    max-width: ${max};
                    max-height: ${max};
                  }
                }
              `}
            >
              <Box className="slide-content">
                <Image data={item.relationships.modal} alt={item.image.alt} />
                {item.body?.value && (
                  <div dangerouslySetInnerHTML={{ __html: item.body.value }} />
                )}
              </Box>
            </Box>
          )
        })}
      </Slider>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      {getTiles()}

      <Modal
        status={modalStatus}
        setStatus={setModalStatus}
        setModalContent={setModalContent}
      >
        <ModalSlider />
      </Modal>
    </Layout>
  )
}

export default Page
