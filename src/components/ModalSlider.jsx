import React, { createRef, useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, Flex } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import styled, { theme } from "~theme"
import Tile from "~components/Tile"
import Image from "~components/Image"
import Layout from "./Layout"
import Modal from "~components/Modal"
import Slider from "~components/Slider"
import { TilesSmall, TilesMedium, TilesLarge } from "~layouts"
import { cleanString } from "~utils"

const ModalSlider = ({ items, slideIndex, setSlideIndex }) => {
  console.log(
    "🚀 ~ file: ModalSlider.jsx ~ line 15 ~ ModalSlider ~ slideIndex",
    slideIndex
  )
  // const [slideIndex, setSlideIndex] = React.useState(0)
  return (
    <Box css="">
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
          return (
            <Box key={item.id} className="slide-wrapper" css="">
              <Flex
                className="slide-content"
                p={[3]}
                css={`
                  flex-direction: column;
                  height: 100%;

                  img {
                    margin: auto;
                    width: auto;
                    height: 100%;
                    max-height: 100%;
                    margin-bottom: 20px;
                  }
                `}
              >
                <Image data={item.relationships.modal} alt={item.image.alt} />
                {item.body?.value && (
                  <div dangerouslySetInnerHTML={{ __html: item.body.value }} />
                )}
              </Flex>
            </Box>
          )
        })}
      </Slider>
    </Box>
  )
}

export default ModalSlider
